import { useCallback, useEffect, useState } from "react";
import { AccountInfo, PublicKey } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";

export type AddressHookState = {
  data?: AccountInfo<any>;
  error?: Error;
  loading?: boolean;
};

export const useAddress = (address: string) => {
  const { connection } = useConnection();

  const [addresssState, setAddressState] = useState<AddressHookState>({
    data: undefined,
    error: undefined,
    loading: false,
  });

  const reset = useCallback(() => {
    setAddressState({
      data: undefined,
      error: undefined,
      loading: false,
    });
  }, []);

  const fetchAddressCallback = useCallback(
    async (address: string, retry = 0) => {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        loading: true,
        error: undefined,
      }));
      try {
        const publicKey = new PublicKey(address);
        const accountInfo = await connection.getAccountInfo(publicKey);
        console.log("accountInfo", accountInfo);
        // const account = await program.account.address.fetch(address);
        // const address = { publicKey: new PublicKey(address), account: account };
        if (accountInfo) {
          setAddressState((prev) => ({
            ...prev,
            data: accountInfo,
            error: undefined,
            loading: false,
          }));
        } else {
          setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: new Error("Account not found."),
            loading: false,
          }));
        }
      } catch (error) {
        console.error(error?.message);
        if (
          error?.message ===
          "Cannot read properties of undefined (reading '_bn')"
        ) {
          return setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: new Error("Invalid address."),
            loading: false,
          }));
        }

        if (error?.message) {
          return setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: error,
            loading: false,
          }));
        }

        setAddressState((prev) => ({
          ...prev,
          data: undefined,
          error: new Error("Unexpected error."),
          loading: false,
        }));
      }
    },
    [connection]
  );

  useEffect(() => {
    if (connection && address) {
      fetchAddressCallback(address);
    }
  }, [connection, address, fetchAddressCallback]);

  useEffect(() => {
    if (!address || address.length === 0) {
      setAddressState((prev) => ({
        ...prev,
        error: undefined,
      }));
    }
  }, [address])

  return { ...addresssState, refetch: fetchAddressCallback, reset };
};
