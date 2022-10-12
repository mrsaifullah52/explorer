import { useState } from "react";
import { toast } from "react-toastify";
import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import * as anchor from "@project-serum/anchor";
import { HelloClockwork, IDL } from "anchor/types/hello_clockwork";
import HELLO_CLOCKWORK_PROGRAM_ID from "anchor/addresses/hello_clockwork";
import { useAnchorProvider } from "contexts/AnchorProvider";

export const CreateQueue = () => {
  const anchorProvider = useAnchorProvider();

  const [queueMsg, setQueueMsg] = useState("Hello World!");
  const handleCreateQueue = () => {
    if (!anchorProvider) return;

    const helloworldProgram: anchor.Program<HelloClockwork> =
      new anchor.Program(IDL, HELLO_CLOCKWORK_PROGRAM_ID, anchorProvider);

    toast(`A queue has been created with "${queueMsg}"`);
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
