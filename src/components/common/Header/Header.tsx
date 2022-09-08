import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { useSolana } from "contexts/SolanaContext";
import { SettingsButton } from "../SettingsButton";
import { WalletButton } from "../WalletButton";
import { HeadingVector } from "./HeadingVector";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { cluster } = useSolana();

  const sanitizeQuery = (query: ParsedUrlQuery) => {
    if (query.address) {
      delete query.address;
    }
    return { ...query };
  };

  return (
    <div className="w-full py-4 px-4 md:px-4 flex items-center justify-between border-b border-[#E7EAED] mb-4">
      <button
        className="font-bold text-2xl text-white no-underline text-left"
        onClick={() =>
          router.push({ pathname: "/", query: sanitizeQuery(router.query) })
        }
      >
        <HeadingVector />
      </button>
      <div className="flex items-center space-x-4">
        <p className="text-sm text-[#979797] text-right">{cluster.label}</p>
        <SettingsButton />
        <WalletButton />
      </div>
    </div>
  );
};

export default Header;
