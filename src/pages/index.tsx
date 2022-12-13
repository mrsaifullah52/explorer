import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";

import { Queues } from "components/common/Queues/Queues";
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
      <Queues />
    </>
  );
};

export default Home;
