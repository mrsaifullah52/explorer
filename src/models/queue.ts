import { serialize, deserialize, deserializeUnchecked } from "borsh";
import { Buffer } from "buffer";
import {
  Keypair,
  AccountMeta,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { CLOCKWORKS_CRANK_PROGRAM_ID } from "utils/constants";

// Flexible class that takes properties and imbues them
// to the object instance
class Assignable {
  constructor(properties) {
    Object.keys(properties).map((key) => {
      return (this[key] = properties[key]);
    });
  }
}

export class Queue extends Assignable {}

const dataSchema = new Map([
  [
    Queue,
    {
      kind: "struct",
      fields: [
        ["discriminator", [8]],
        ["authority", [32]],
        ["created_at", "i64"],
        // ["tree_length", "u32"],
        // ["map", { kind: "map", key: "string", value: "string" }],
      ],
    },
  ],
]);

// self.authority = authority.key();
// self.created_at = Clock::get().unwrap().into();
// self.exec_context = None;
// self.first_instruction = instruction;
// self.is_paused = false;
// self.name = name;
// self.next_instruction = None;
// self.trigger = trigger;

// /**
//  * Queue
//  */

//  #[account]
//  #[derive(Debug)]
//  pub struct Queue {
//      pub authority: Pubkey,
//      pub created_at: ClockData,
//      pub exec_context: Option<ExecContext>,
//      pub first_instruction: InstructionData,
//      pub is_paused: bool,
//      pub name: String,
//      pub next_instruction: Option<InstructionData>,
//      pub trigger: Trigger,
//  }

/**
 * Fetch program account data
 * @param {Connection} connection - Solana RPC connection
 * @param {PublicKey} account - Public key for account whose data we want
 * @return {Promise<Queue[]>} - Keypair
 */
export async function fetchQueues(connection: Connection): Promise<Queue[]> {
  const programAccounts = await connection.getProgramAccounts(
    CLOCKWORKS_CRANK_PROGRAM_ID
  );

  programAccounts.forEach(({ pubkey }) => {
    console.log(pubkey.toBase58());
  });

  const deserializedAccounts = programAccounts.map(({ account }) => {
    try {
      console.log(account);
      return deserializeUnchecked(dataSchema, Queue, account.data);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  });

  console.log("deserializedAccounts", deserializedAccounts);
  return deserializedAccounts;
  // let nameAccount = await connection.getAccountInfo(account, "processed");
}
