import React from 'react';
import * as anchor from '@project-serum/anchor';
import { ClockworkCrank, IDL } from 'anchor/types/clockwork_crank';
import { CLOCKWORK_CRANK_PROGRAM_ID } from 'anchor/addresses/clockwork_crank';
import { useAnchorProvider } from './AnchorProvider';

const CrankProgramProviderContext = React.createContext<anchor.Program<ClockworkCrank> | undefined>(undefined);

export const CrankProgramProvider: React.FC = ({ children }) => {
  const anchorProvider = useAnchorProvider();
  const crankProgram = React.useMemo(() => {
    const crankProgram: anchor.Program<ClockworkCrank> =
    new anchor.Program(IDL, CLOCKWORK_CRANK_PROGRAM_ID, anchorProvider);
    return crankProgram;
  }, [anchorProvider]);

  return (
    <CrankProgramProviderContext.Provider value={crankProgram}>
      {children}
    </CrankProgramProviderContext.Provider>
  );
};
