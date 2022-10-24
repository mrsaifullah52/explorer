import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import * as anchor from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";

import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { HelloClockwork, IDL } from "anchor/types/hello_clockwork";
import { QueueProgram, IDL as QueueIDL } from "anchor/types/queue_program";
import {
  HELLO_CLOCKWORK_PROGRAM_ID,
  CLOCKWORK_QUEUE_PROGRAM_ID,
} from "anchor/addresses";
import { useAnchorProvider } from "contexts/AnchorProvider";

const SEED_QUEUE = "queue";
export const CreateQueue = () => {
  const anchorProvider = useAnchorProvider();
  const { publicKey } = useWallet();

  const [queueName, setQueueName] = useState("hello");
  const [queueMsg, setQueueMsg] = useState("Hello World!");

  const handleCreateQueue = async () => {
    if (!anchorProvider) return;
    if (!publicKey) {
      toast("Connect your wallet and try again!");
      return;
    }

    const helloworldProgram: anchor.Program<HelloClockwork> =
      new anchor.Program(IDL, HELLO_CLOCKWORK_PROGRAM_ID, anchorProvider);

    const queueProgram: anchor.Program<QueueProgram> = new anchor.Program(
      QueueIDL,
      CLOCKWORK_QUEUE_PROGRAM_ID,
      anchorProvider
    );

    const queues = await queueProgram.account.queue.all();
    console.log(queues[0].account.createdAt)
    const qAccountIds = queues.map((q) => q.account.id);
    if (qAccountIds.find((id) => id === queueName)) {
      toast("Please try another name!");
      return;
    }

    const [pda] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(SEED_QUEUE, "utf-8"),
        publicKey.toBuffer(),
        Buffer.from(queueName, "utf-8"),
      ],
      CLOCKWORK_QUEUE_PROGRAM_ID
    );

    try {
      const queue_transaction = await queueProgram.methods
        .queueCreate(
          queueName,
          {
            programId: helloworldProgram.programId,
            accounts: [
              { pubKey: publicKey, isSigner: true, isWritable: false },
            ],
            data: Buffer.from(queueMsg, "utf-8"),
          },
          {
            cron: {
              schedule: "*/10 * * * * * *",
              skippable: true,
            },
          }
        )
        .accounts({
          authority: publicKey,
          payer: publicKey,
          queue: pda,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      console.log(queue_transaction);

      toast(`A queue has been created with "${queueMsg}"`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col mt-3">
      <label>Name:</label>
      <Input
        className="mt-1 mb-5"
        placeholder="Queue name here"
        value={queueName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQueueName(e.target.value)
        }
      />
      <label>Message:</label>
      <Input
        className="mt-1 mb-5"
        placeholder="Queue message here"
        value={queueMsg}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQueueMsg(e.target.value)
        }
      />
      <PrimaryButton className="pt-3 pb-3" onClick={() => handleCreateQueue()}>
        Create Queue
      </PrimaryButton>
    </div>
  );
};
