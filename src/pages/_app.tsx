import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { getLayout } from "components/layouts/SiteLayout";
import { ThemeProvider } from "next-themes";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ContextProvider>
        <ThemeProvider attribute="class">
          <div className="flex flex-col h-screen dark:bg-[#2C2B2B]">
            {getLayout(<Component {...pageProps} />)}
          </div>
        </ThemeProvider>
      </ContextProvider>
  );
};

export default App;
