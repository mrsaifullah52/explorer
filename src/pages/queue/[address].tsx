import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
import { useQueue } from "hooks/useQueue";
import { Queue } from "components/common/Queue";
import Custom404 from "pages/404";

const MarketPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading } = useQueue(address as string);

  if (loading) return <p>loading...</p>;

  if (data) {
    return <Queue q={data} />;
  }

  if (error && error?.message) {
    const missingQueueRegExp = new RegExp("Account does not exist", "i");
    if (error.message.match(missingQueueRegExp)) {
      return <Custom404 title={"Queue not found!"} />;
    }
  }
  return null;
};

MarketPage.getLayout = (page: ReactNode) => getLayout(page, "Queue");

export default MarketPage;
