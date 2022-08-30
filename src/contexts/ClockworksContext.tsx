import { PublicKey } from "@solana/web3.js";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { CLOCKWORKS_CRANK_PROGRAM_ID } from "../utils/constants";

type ClockworksContextType = {
  programID: PublicKey;
  setProgramID: (programID: string) => void;
};

type ClockworksProviderProps = {
  children: ReactNode;
};

const ClockworksContext = createContext<ClockworksContextType | null>(null);

export const ClockworksProvider = ({ children }: ClockworksProviderProps) => {
  const router = useRouter();

  const [programID, _setProgramID] = useState(CLOCKWORKS_CRANK_PROGRAM_ID);

  const setProgramID = (programID: string) => {
    const newQuery: {
      programID?: string;
    } = {
      ...router.query,
      programID,
    };

    if (programID === CLOCKWORKS_CRANK_PROGRAM_ID.toBase58()) delete newQuery.programID;

    try {
      new PublicKey(programID);
    } catch (e) {
      console.error(e);
      toast.error("Invalid program ID");
      return;
    }

    router.replace({
      query: newQuery,
    });
  };

  useEffect(() => {
    if (router.query.programID) {
      _setProgramID(new PublicKey(router.query.programID));
    } else _setProgramID(new PublicKey(CLOCKWORKS_CRANK_PROGRAM_ID));
  }, [router.query.programID]);

  return (
    <ClockworksContext.Provider value={{ programID, setProgramID }}>
      {children}
    </ClockworksContext.Provider>
  );
};

export const useClockworks = () => {
  const clockworks = useContext(ClockworksContext);

  if (!clockworks) {
    throw new Error("Make sure to wrap your component with ClockworksProvider");
  }

  return clockworks;
};
