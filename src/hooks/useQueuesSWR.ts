import { useConnection } from "@solana/wallet-adapter-react";
// import { Connection, PublicKey } from "@solana/web3.js";
// import { useEffect, useState } from "react";
import useSWR from "swr";
// import { useClockworks } from "../contexts/ClockworksContext";
// import { useSolana } from "../contexts/SolanaContext";
// import {
//   CLOCKWORKS_CRANK_PROGRAM_ID,
// } from "../utils/constants";
// import axios from "axios";
import { useCrankProgram } from "contexts/CrankProgramProvider";
// import { Program } from "@project-serum/anchor";
// import { ClockworkCrank } from "anchor/types/clockwork_crank";
import { Queue, CrankProgram } from "models/types";

const isLocalhost = (url: string) => {
  return url.includes("localhost") || url.includes("127.0.0.1");
};

const fetcher = async (
  program: CrankProgram,
  // isLocalhost: boolean
): Promise<Queue[]> => {
  try {
    const queues = await program.account.queue.all();

    console.log({ queues });
  
    return queues;
  } catch (error) {
    console.log(error);
  }


  // if (isLocalhost) {
  //   const markets = await connection.getParsedProgramAccounts(programID, {
  //     filters: [
  //       {
  //         memcmp: {
  //           offset: 5,
  //           bytes: MARKET_ACCOUNT_FLAGS_B58_ENCODED,
  //         },
  //       },
  //     ],
  //   });
  //   serumMarkets = markets.map((m) => ({ address: m.pubkey }));
  // } else {
  //   const { data } = await axios.get<{
  //     tvl: number;
  //     total_vol_1d: number;
  //     markets: {
  //       market_address: string;
  //       base_symbol: string;
  //       quote_symbol: string;
  //     }[];
  //   }>("https://serum-volume-tracker.vercel.app/api");
  //   serumMarkets = data.markets.map((m) => ({
  //     address: new PublicKey(m.market_address),
  //     baseSymbol: m.base_symbol,
  //     quoteSymbol: m.quote_symbol,
  //   }));
  // }

  // return serumMarkets;
};

/**
 * Returns the list of Markets for a given Program ID.
 *
 * Currently, this only returns markets for localnet or Serum Dex V3 on mainnet-beta.
 */
export const useQueuesSWR = () => {
  // const { cluster } = useSolana();
  const { connection } = useConnection();
  // const { programID } = useClockworks();
  const program = useCrankProgram();

  // const [doesFetch, setDoesFetch] = useState(false);

  // useEffect(() => {
  //   setDoesFetch(
  //     (cluster.network === "mainnet-beta" &&
  //       programID.toString() === CLOCKWORKS_CRANK_PROGRAM_ID.toBase58()) ||
  //       isLocalhost(connection.rpcEndpoint)
  //   );
  // }, [cluster.network, programID, connection.rpcEndpoint]);

  const {
    data: clockworkQueues,
    isValidating,
    error,
    mutate,
  } = useSWR(
    "/queues/" + program.provider.connection.rpcEndpoint,
    () => fetcher(program),
    {
      errorRetryCount: 1,
      // revalidateOnMount: false,
      // revalidateOnFocus: false,
    }
  );

  const loading = !clockworkQueues && !error;

  return {
    data: clockworkQueues ?? [],
    loading,
    error,
    isValidating,
    mutate,
  };
};
