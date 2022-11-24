import Router, { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
import { useQueue } from "hooks/useQueue";
import { Queue } from "components/common/Queue";
import Custom404 from "pages/404";
import { useSolana } from "contexts/SolanaContext";
import { getExplorerAccountLink } from "utils/general";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
import { Loader } from "components/common/Loader";

const QueuePage = () => {
  const router = useRouter();
  const { cluster } = useSolana();

  const { address } = router.query;
  const queue = useQueue(address as string);

  // useEffect(() => {
  //   const hasError = queue.error && queue.error?.message;
  //   if (!queue.data && !queue.loading && !hasError) {
  //     const link = getExplorerAccountLink(
  //       new PublicKey(address as string),
  //       cluster.network
  //     );
  //     console.log("link", link);
  //     // router.replace(link);
  //     // NOTE: If not deleted, extra ?address=xyz is added
  //     delete router.query.address;

  //     router.push({ pathname: link, query: router.query });
  //   }
  // }, [queue]);

  const { data, error, loading } = queue;

  if (loading) return <Loader />;

  if (data) {
    return <Queue q={data} />;
  }

  if (error && error?.message) {
    const missingQueueRegExp = new RegExp("Account does not exist", "i");

    if (error.message.match(missingQueueRegExp)) {
      return <Custom404 title={"Queue not found!"} />;
    }
  }

  // return <Link />;
  return null;
};

QueuePage.getLayout = (page: ReactNode) => getLayout(page, "Queue");

export default QueuePage;
