import { useCrankProgram } from "contexts/CrankProgramProvider";
import { useCallback, useEffect, useState } from "react";
import { Queue } from "models/types";

export type QueuesHookState = {
  data: Queue[];
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useQueues = () => {
  const program = useCrankProgram();

  const fetchQueuesCallback = useCallback(async () => {
    setQueuesState((prev) => ({ ...prev, loading: true, error: undefined }));
    try {
      const queues = await program.account.queue.all();
      setQueuesState((prev) => ({
        ...prev,
        data: queues,
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
  }, [program]);

  const [queuesState, setQueuesState] = useState<QueuesHookState>({
    data: [],
    refetch: fetchQueuesCallback,
  });

  useEffect(() => {
    fetchQueuesCallback();
  }, [program]);

  return queuesState;
};
