import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "next-themes";

import { SettingsButton } from "../SettingsButton";
import { WalletButton } from "../WalletButton";
import { ThemeSwitch } from "../ThemeSwitch";
import { HeadingVector } from "./HeadingVector";

type HeaderProps = {
  connected: boolean;
};

export const Header: FC<HeaderProps> = ({ connected }) => {
  const router = useRouter();
  const { theme } = useTheme();

  const sanitizeQuery = (query: ParsedUrlQuery) => {
    if (query.address) {
      delete query.address;
    }
    return { ...query };
  };

  return (
    <>
      <ToastContainer
        position={toast.POSITION.BOTTOM_LEFT}
        hideProgressBar={true}
        icon="📣"
        theme={theme === "dark" ? "dark" : "light"}
      />
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
          {connected && (
            <>
              <SettingsButton />
              <WalletButton className="justify-end"/>
            </>
          )}
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
};

export default Header;
