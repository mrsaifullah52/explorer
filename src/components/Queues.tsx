import React, { useCallback } from "react";
import { useQueues } from 'hooks/useQueues';

export const Queues = () => {
  const { data, error, loading } = useQueues();

  return (
    <div className="max-w-md mx-auto mockup-code bg-primary p-6 my-2">
      {data.map((q) => {
        console.log("q", q);
        return <div></div>;
      })}
    </div>
  );
};
