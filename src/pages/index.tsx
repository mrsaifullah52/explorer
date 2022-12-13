import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";

import { Queues } from "components/common/Queues/Queues";
import { AccountRenderer } from "components/common/AccountRenderer";
import { WalletButton } from "components/common/WalletButton";

const Home: NextPage = (props) => {
  const { connected } = useWallet();

  if (!connected) {
    return (
      <>
        <WalletButton />
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
