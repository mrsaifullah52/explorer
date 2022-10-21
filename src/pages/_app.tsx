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
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Clockwork Explorer</title>
        <meta property="og:title" content={"Clockwork Explorer"} />
        <meta property="og:image" content={"/opengraph-image.png"} />
      </Head>
      <ContextProvider>
        <ThemeProvider enableSystem={false} attribute="class">
          <div className="flex flex-col h-screen">
            {getLayout(<Component {...pageProps} />)}
          </div>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
};

export default App;
