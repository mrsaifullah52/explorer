import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
import { useQueue } from "hooks/useQueue";
import { Queue } from "components/Queue";

const MarketPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading } = useQueue(address as string);

  if (loading) return <p>loading...</p>;

  if (data) {
    return <Queue q={data} />;
  }
  return null;
};

MarketPage.getLayout = (page: ReactNode) => getLayout(page, "Queue");

export default MarketPage;
