import { useCallback, useEffect, useState } from "react";
import { TransactionResponse } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";

export type AddressHookState = {
  data?: TransactionResponse;
  error?: Error;
  loading?: boolean;
};

export const useTransaction = (transaction: string) => {
  const { connection } = useConnection();

  const [transactionState, setAddressState] = useState<AddressHookState>({
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
    async (transaction: string, retry = 0) => {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        loading: true,
        error: undefined,
      }));
      try {
        // const publicKey = new PublicKey(transaction);
        const txResponse = await connection.getTransaction(transaction);
        // const account = await program.account.transaction.fetch(transaction);
        // const transaction = { publicKey: new PublicKey(transaction), account: account };
        if (txResponse) {
          setAddressState((prev) => ({
            ...prev,
            data: txResponse,
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
            error: new Error("Invalid transaction."),
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
    if (connection && transaction) {
      fetchAddressCallback(transaction);
    }
  }, [connection, transaction, fetchAddressCallback]);

  useEffect(() => {
    if (!transaction || transaction.length === 0) {
      setAddressState((prev) => ({
        ...prev,
        error: undefined,
      }));
    }
  }, [transaction]);

  return { ...transactionState, refetch: fetchAddressCallback, reset };
};
