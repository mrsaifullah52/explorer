import { useState } from "react";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { toast } from "react-toastify";

export const CreateQueue = () => {
  const [queueMsg, setQueueMsg] = useState("Hello World!");
  const handleCreateQueue = () => {
    toast(`A queue has been created with ${queueMsg}`);
  };

  return (
    <div className="flex flex-col mt-3">
      <label>Message:</label>
      <Input
        className="mt-1 mb-5"
        placeholder="Queue message here"
        value={queueMsg}
        onChange={(e) => setQueueMsg(e.target.value)}
      />
      <PrimaryButton className="pt-3 pb-3" onClick={() => handleCreateQueue()}>
        Create Queue
      </PrimaryButton>
    </div>
  );
};
