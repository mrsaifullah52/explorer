import * as anchor from '@project-serum/anchor';

import { ClockworkCrank, IDL } from './types/clockwork_crank';
import { CLOCKWORK_CRANK_PROGRAM_ID } from '../anchor/addresses/clockwork_crank';

export type initCrankProgram = (
  provider: anchor.AnchorProvider
) => anchor.Program<ClockworkCrank>;

export const initCrankProgram: initCrankProgram = (
  provider
) => {
  const CrankProgram: anchor.Program<ClockworkCrank> =
    new anchor.Program(IDL, CLOCKWORK_CRANK_PROGRAM_ID, provider);
  return CrankProgram;
};
