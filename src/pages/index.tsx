import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";

import { Threads } from "components/common/Threads/Threads";
import { AccountRenderer } from "components/common/AccountRenderer";
import ConnectScreen from "components/common/ConnectScreen";

const Home: NextPage = (props) => {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <>
        <ConnectScreen />
      </>
    );
  }

  return (
    <>
      <AccountRenderer />
      <Threads />
    </>
  );
};

export default Home;
