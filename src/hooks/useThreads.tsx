import { useClockworkProgram } from "contexts/ThreadProgramProvider";
import { useCallback, useEffect, useState } from "react";
import { Thread } from "@clockwork-xyz/sdk";

export type ThreadsHookState = {
  data: Thread[];
  error?: Error;
  loading?: boolean;
  refetch: () => void;
};

export const useThreads = () => {
  const program = useClockworkProgram();

  const fetchThreadsCallback = useCallback(async () => {
    setThreadsState((prev) => ({ ...prev, data: [], loading: true, error: undefined }));
    try {
      const queues = await program.account.thread.all();
      setThreadsState((prev) => ({
        ...prev,
        data: queues.sort(
          (a, b) =>
            b.account.createdAt.unixTimestamp.toNumber() -
            a.account.createdAt.unixTimestamp.toNumber()
        ),
        error: undefined,
        loading: false,
      }));
    } catch (error) {
      console.error(error);
      setThreadsState((prev) => ({
        ...prev,
        error: error,
        loading: false,
      }));
    }
  }, [program]);

  const [queuesState, setThreadsState] = useState<ThreadsHookState>({
    data: [],
    refetch: fetchThreadsCallback,
  });

  useEffect(() => {
    fetchThreadsCallback();
  }, [program]);

  return queuesState;
};
