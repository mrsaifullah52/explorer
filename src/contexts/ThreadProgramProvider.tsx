import React, { useContext } from "react";
import * as anchor from "@project-serum/anchor";
import {
  ThreadProgram,
  ThreadProgramIDL,
  CLOCKWORKS_PROGRAMS,
} from "@clockwork-xyz/sdk";
import { useAnchorProvider } from "./AnchorProvider";
import { useClockworks } from "./ClockworksContext";

const ThreadProgramProviderContext = React.createContext<
  anchor.Program<ThreadProgram> | undefined
>(undefined);

const getIdlTitle = (idl: anchor.Idl) => {
  return (idl.name + "_" + idl.version).replace("_", " ").toUpperCase();
};

export const selectIdl = (programID: anchor.web3.PublicKey) => {
  try {
    const version = CLOCKWORKS_PROGRAMS[programID.toBase58()];
    switch (version) {
      case getIdlTitle(ThreadProgramIDL):
        return ThreadProgramIDL;
      default:
        return ThreadProgramIDL;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const ThreadProgramProvider: React.FC<{
  children: React.ReactChild;
}> = ({ children }) => {
  const anchorProvider = useAnchorProvider();
  const { programID } = useClockworks();
  const threadProgram = React.useMemo(() => {
    if (!anchorProvider) return undefined;
    const IDL = selectIdl(programID);
    const threadProgram: anchor.Program<ThreadProgram> = new anchor.Program(
      IDL,
      programID,
      anchorProvider
    );
    return threadProgram;
  }, [anchorProvider, programID]);

  return (
    <ThreadProgramProviderContext.Provider value={threadProgram}>
      {children}
    </ThreadProgramProviderContext.Provider>
  );
};

export const useClockworkProgram = () => {
  return useContext(ThreadProgramProviderContext);
};
