import React, { useContext } from "react";
import * as anchor from "@project-serum/anchor";
import { ClockworkCrank as ClockworkCrank_v1_0_3, IDL as  ClockworkCrankIDLv1_0_3 } from "anchor/types/clockwork_crank";
import { QueueProgram as QueueProgram_v1_2_14, IDL as QueueProgramIDL_v1_2_14 } from "anchor/types/queue_program_v1.2.14";
import { CLOCKWORKS_PROGRAMS } from "anchor/addresses";
import { useAnchorProvider } from "./AnchorProvider";
import { useClockworks } from "./ClockworksContext";

type ClockworkProgram = ClockworkCrank_v1_0_3 | QueueProgram_v1_2_14

const CrankProgramProviderContext = React.createContext<
  anchor.Program<ClockworkProgram> | undefined
>(undefined);

export const selectIdl = (programID: anchor.web3.PublicKey) => {
  try {
    const version = CLOCKWORKS_PROGRAMS[programID.toBase58()];
    switch (version) {
      case "Crank V1.0.3":
        return ClockworkCrankIDLv1_0_3;    
      case "Queue Program V1.2.14":
        return QueueProgramIDL_v1_2_14;    
      default:
        return QueueProgramIDL_v1_2_14;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export const CrankProgramProvider: React.FC<{ children: React.ReactChild }> = ({ children }) => {
  const anchorProvider = useAnchorProvider();
  const { programID } = useClockworks();
  const crankProgram = React.useMemo(() => {
    if (!anchorProvider) return undefined;
    const IDL = selectIdl(programID);
    const crankProgram: anchor.Program<ClockworkProgram> = new anchor.Program(
      IDL,
      programID,
      anchorProvider
    );
    return crankProgram;
  }, [anchorProvider, programID]);

  return (
    <CrankProgramProviderContext.Provider value={crankProgram}>
      {children}
    </CrankProgramProviderContext.Provider>
  );
};

export const useCrankProgram = () => {
  return useContext(CrankProgramProviderContext);
};
