import { useState } from "react";
import { toast } from "react-toastify";
import * as anchor from "@project-serum/anchor";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";

import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { HelloClockwork, IDL } from "anchor/types/hello_clockwork";
import HELLO_CLOCKWORK_PROGRAM_ID from "anchor/addresses/hello_clockwork";
import { useAnchorProvider } from "contexts/AnchorProvider";

export const CreateQueue = () => {
  const anchorProvider = useAnchorProvider();
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  const [queueMsg, setQueueMsg] = useState("Hello World!");
  const handleCreateQueue = async () => {
    if (!anchorProvider) return;

    const helloworldProgram: anchor.Program<HelloClockwork> =
      new anchor.Program(IDL, HELLO_CLOCKWORK_PROGRAM_ID, anchorProvider);

    try {
      const transaction = await helloworldProgram.methods
        .helloWorld(queueMsg)
        .accounts({
          helloQueue: publicKey,
        })
        .transaction();

      await sendTransaction(new Transaction().add(transaction), connection);

      toast(`A queue has been created with "${queueMsg}"`);
    } catch (e) {
      console.log(e);
    }
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
