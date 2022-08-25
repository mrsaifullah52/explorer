import { useCrankProgram } from "contexts/CrankProgramProvider";
import { useCallback, useEffect, useState } from "react";

export type QueuesHookState = {
  data: any[];
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useQueues = () => {
  const program = useCrankProgram();

  const fetchQueues = useCallback(async () => {
    setQueuesState((prev) => ({ ...prev, loading: true, error: undefined }));
    try {
      const queues = await program.account.queue.all();
      console.log("queues", queues);
      setQueuesState((prev) => ({
        ...prev,
        queues: queues,
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      console.log("error", error);
      setQueuesState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
    }
  }, []);

  const [queuesState, setQueuesState] = useState<QueuesHookState>({
    data: [],
    refetch: fetchQueues,
  });

  useEffect(() => {
    fetchQueues();
  }, []);

  return queuesState;
};
