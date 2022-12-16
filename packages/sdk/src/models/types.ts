import { Program, ProgramAccount } from "@project-serum/anchor";
import {
  IdlTypes,
  TypeDef,
} from "@project-serum/anchor/dist/cjs/program/namespace/types";
import { ThreadProgram } from "../anchor/types/thread_program_v1.3.15";

export type EndpointTypes = "mainnet" | "devnet" | "localnet";

export type Thread = ProgramAccount<TypeDef<any, IdlTypes<ThreadProgram>>>;

export type ClockworkProgram = Program<ThreadProgram>;
