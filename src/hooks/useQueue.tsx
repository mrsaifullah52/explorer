import { useCrankProgram } from "contexts/CrankProgramProvider";
import { useCallback, useEffect, useState } from "react";
import { Queue } from "models/types";
import { PublicKey } from "@solana/web3.js";

export type QueuesHookState = {
  data: Queue;
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useQueue = (address: string) => {
  const program = useCrankProgram();

  const fetchQueuesCallback = useCallback(async () => {
    setQueuesState((prev) => ({
      ...prev,
      data: undefined,
      loading: true,
      error: undefined,
    }));
    try {
      const account = await program.account.queue.fetch(address);
      const queue = { publicKey: new PublicKey(address), account: account };
      setQueuesState((prev) => ({
        ...prev,
        data: queue,
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      setQueuesState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
    }
  }, [program, address]);

  const [queuesState, setQueuesState] = useState<QueuesHookState>({
    data: undefined,
    refetch: fetchQueuesCallback,
  });

  useEffect(() => {
    fetchQueuesCallback();
  }, [program, address]);

  return queuesState;
};
