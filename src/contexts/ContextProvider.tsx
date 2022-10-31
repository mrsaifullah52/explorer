
import { FC, ReactNode } from "react";
import { AutoConnectProvider } from "./AutoConnectProvider";
import { AnchorProviderProvider } from "./AnchorProvider";
import { CrankProgramProvider } from "./CrankProgramProvider";
import { ClockworksProvider } from "./ClockworksContext";
import { SolanaProvider } from "./SolanaContext";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
        <SolanaProvider>
          <AutoConnectProvider>
              <AnchorProviderProvider>
                <ClockworksProvider>
                  <CrankProgramProvider>{children}</CrankProgramProvider>
                </ClockworksProvider>
              </AnchorProviderProvider>
          </AutoConnectProvider>
        </SolanaProvider>
  );
};
