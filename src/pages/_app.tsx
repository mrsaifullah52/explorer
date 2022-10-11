import { AppProps } from "next/app";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { getLayout } from "components/layouts/SiteLayout";
import { ThemeProvider } from "next-themes";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <ThemeProvider attribute="class">
        <div className="flex flex-col h-screen dark:bg-[#2C2B2B]">
          {getLayout(<Component {...pageProps} />)}
        </div>
        <ToastContainer
          position={toast.POSITION.BOTTOM_LEFT}
          hideProgressBar={true}
        />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
