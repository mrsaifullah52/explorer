import { useState } from "react";
import { toast } from "react-toastify";
import * as anchor from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";

import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { HelloClockwork, IDL } from "anchor/types/hello_clockwork";
import { QueueProgram, IDL as QueueIDL } from "anchor/types/queue_program";
import HELLO_CLOCKWORK_PROGRAM_ID from "anchor/addresses/hello_clockwork";
import { useAnchorProvider } from "contexts/AnchorProvider";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";

export const CreateQueue = () => {
  const anchorProvider = useAnchorProvider();
  const { publicKey } = useWallet();

  const [queueMsg, setQueueMsg] = useState("Hello World!");
  const handleCreateQueue = async () => {
    if (!anchorProvider) return;

    const helloworldProgram: anchor.Program<HelloClockwork> =
      new anchor.Program(IDL, HELLO_CLOCKWORK_PROGRAM_ID, anchorProvider);

    const queuePublicKey = new anchor.web3.PublicKey(
      "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzYmv"
    );

    const queueProgram: anchor.Program<QueueProgram> = new anchor.Program(
      QueueIDL,
      queuePublicKey,
      anchorProvider
    );

    const [pda] = await anchor.web3.PublicKey.findProgramAddress(
      [publicKey.toBuffer(), utf8.encode("hello")],
      queuePublicKey
    );

    try {
      const transaction = helloworldProgram.methods
        .helloWorld(queueMsg)
        .accounts({
          helloQueue: pda,
        });

      const queue_transaction = await queueProgram.methods
        .queueCreate(queueProgram.programId, transaction.instruction, {
          schedule: "*/10 * * * * * *",
          skippable: true,
        })
        .accounts({
          authority: publicKey,
          payer: publicKey,
          queue: pda,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      console.log(transaction, queue_transaction);

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
