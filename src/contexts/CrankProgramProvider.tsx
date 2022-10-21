import React, { useContext } from "react";
import * as anchor from "@project-serum/anchor";
import { ClockworkCrank as ClockworkCrankv1_0_3, IDL as IDLv1_0_3 } from "anchor/types/clockwork_crank";
// import { ClockworkCrank, IDL } from "anchor/types/clockwork_crank_v1_0_6";
import { QueueProgram, IDL } from "anchor/types/queue_program_v1_2_14";

// import IDL from "anchor/idl/clockwork_crank_v1_0_6.json";
import { CLOCKWORKS_PROGRAMS } from "utils/constants";
import { useAnchorProvider } from "./AnchorProvider";
import { useClockworks } from "./ClockworksContext";

const CrankProgramProviderContext = React.createContext<
  anchor.Program<QueueProgram> | undefined
>(undefined);

const selectIdlVersion = (programID: anchor.web3.PublicKey) => {
  try {
    const version = CLOCKWORKS_PROGRAMS[programID.toBase58()];
    console.log('IDL Version', version);

  } catch (error) {
    console.error(error);
  }
}

export const CrankProgramProvider: React.FC = ({ children }) => {
  const anchorProvider = useAnchorProvider();
  const { programID } = useClockworks();
  const crankProgram = React.useMemo(() => {
    if (!anchorProvider) return undefined;
    selectIdlVersion(programID);
    const crankProgram: anchor.Program<QueueProgram> = new anchor.Program(
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
