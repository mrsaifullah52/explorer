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
    <div className="h-[86px] w-full py-4 px-4 lg:px-10 flex items-center justify-between border-b border-[#E7EAED] mb-10">
      <button
        className="font-bold text-2xl text-white no-underline text-left"
        onClick={() =>
          router.push({ pathname: "/", query: sanitizeQuery(router.query) })
        }
      >
        <HeadingVector />
      </button>
      <div className="flex items-center">
        <p className="text-sm text-[#0E1114] text-right lg:mr-8">
          {cluster.label}
        </p>
        <SettingsButton />
        <WalletButton />
      </div>
    </div>
  );
};

export default Header;
