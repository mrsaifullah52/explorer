import { Program, ProgramAccount } from "@project-serum/anchor";
import {
  IdlTypes,
  TypeDef,
} from "@project-serum/anchor/dist/cjs/program/namespace/types";
import { ClockworkCrank } from "anchor/types/clockwork_crank";

export type EndpointTypes = "mainnet" | "devnet" | "localnet";

export type Queue = ProgramAccount<TypeDef<any, IdlTypes<ClockworkCrank>>>;

export type CrankProgram = Program<ClockworkCrank>;
