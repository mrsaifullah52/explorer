import type { NextPage } from "next";
import { Queues } from "components/common/Queues/Queues";
import { AccountRenderer } from "components/common/AccountRenderer";

const Home: NextPage = (props) => {
  return (
    <>
      <AccountRenderer />
      <Queues />
    </>
  );
};

export default Home;
