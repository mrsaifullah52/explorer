import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { SettingsButton } from "../SettingsButton";
import { WalletButton } from "../WalletButton";

import { ThemeSwitch } from "../ThemeSwitch";
import { HeadingVector } from "./HeadingVector";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const sanitizeQuery = (query: ParsedUrlQuery) => {
    if (query.address) {
      delete query.address;
    }
    return { ...query };
  };

  return (
    <div className="h-[86px] w-full py-4 px-4 lg:px-10 flex items-center justify-between border-b border-[#E7EAED] dark:border-[#4F4F4F] mb-10">
      <button
        className="font-bold text-2xl text-white no-underline text-left m-0"
        onClick={() =>
          router.push({ pathname: "/", query: sanitizeQuery(router.query) })
        }
      >
        <HeadingVector />
      </button>
      <div className="flex items-center space-x-3">
        <SettingsButton />
        <WalletButton />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
