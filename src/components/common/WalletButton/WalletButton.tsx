import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { FC, useEffect, useRef, useState } from "react";
import { KeyIcon } from "@heroicons/react/outline";
import {
  CLUSTERS,
  CUSTOM_RPC_CLUSTER,
  useSolana,
} from "../../../contexts/SolanaContext";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlerter";

type WalletButtonProps = {};

export const WalletButton: FC<WalletButtonProps> = () => {
  const wallet = useWallet();
  const { visible, setVisible } = useWalletModal();

  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropdownRef, showDropdown, () => setShowDropdown(false));

  return (
    <div className="relative flex justify-end" ref={dropdownRef}>
      <button
        onClick={
          wallet.connected
            ? () => {
                setShowDropdown(!showDropdown);
              }
            : () => setVisible(!visible)
        }
        className="border border-[#0E1114] text-sm text-[#0E1114] align-middle justify-center"
      >
        <div className="md:block hidden px-10 py-3">
          {wallet.connected
            ? `${wallet.publicKey!.toString().slice(0, 6)}...`
            : "Connect"}
        </div>
        <div className="md:hidden p-2">
          <KeyIcon className="h-6 w-6" />
        </div>
      </button>
      <ul
        className={`${
          showDropdown ? "block" : "hidden"
        } absolute top-full w-64 my-2 py-2 bg-[#F8F9F9] rounded-lg flex flex-col space-y-1`}
      >
        <li
          className={`hover:bg-[#E7EAED] p-2 cursor-pointer`}
          onClick={() => {
            wallet.disconnect();
            setShowDropdown(false);
          }}
        >
          <div>
            <h2 className="font-medium text-[#0E1114]">Disconnect</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};
