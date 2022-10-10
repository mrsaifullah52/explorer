import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { useSolana } from "contexts/SolanaContext";
import { SettingsButton } from "../SettingsButton";
import { WalletButton } from "../WalletButton";
import { HeadingVector as HeadingVectorLight } from "./HeadingVector";
import { HeadingVector as HeadingVectorDark } from "./HeadingVectorDark";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "../ThemeSwitch";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const router = useRouter();
  const { cluster } = useSolana();
  const { theme, setTheme } = useTheme();

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
        {theme === "dark" ? <HeadingVectorDark /> : <HeadingVectorLight />}
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
