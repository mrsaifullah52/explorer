import { useConnection } from "@solana/wallet-adapter-react";
import useSWR from "swr";
import { useCrankProgram } from "contexts/CrankProgramProvider";
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
  
    return queues;
  } catch (error) {
    console.error(error);
  }
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
