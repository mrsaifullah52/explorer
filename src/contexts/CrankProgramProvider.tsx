import React, { useContext } from "react";
import * as anchor from "@project-serum/anchor";
import { ClockworkCrank, IDL } from "anchor/types/clockwork_crank";
import { useAnchorProvider } from "./AnchorProvider";
import { useClockworks } from "./ClockworksContext";

const CrankProgramProviderContext = React.createContext<
  anchor.Program<ClockworkCrank> | undefined
>(undefined);

export const CrankProgramProvider: React.FC = ({ children }) => {
  const anchorProvider = useAnchorProvider();
  const { programID } = useClockworks();
  const crankProgram = React.useMemo(() => {
    if (!anchorProvider) return undefined;
    const crankProgram: anchor.Program<ClockworkCrank> = new anchor.Program(
      IDL,
      programID,
      anchorProvider
    );
    return crankProgram;
  }, [anchorProvider]);

  return (
    <CrankProgramProviderContext.Provider value={crankProgram}>
      {children}
    </CrankProgramProviderContext.Provider>
  );
};

export const useCrankProgram = () => {
  return useContext(CrankProgramProviderContext);
};
