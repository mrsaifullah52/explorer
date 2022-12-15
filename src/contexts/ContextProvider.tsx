import { FC, ReactNode } from "react";
import { AutoConnectProvider } from "./AutoConnectProvider";
import { AnchorProviderProvider } from "./AnchorProvider";
import { ThreadProgramProvider } from "./ThreadProgramProvider";
import { ClockworksProvider } from "./ClockworksContext";
import { SolanaProvider } from "./SolanaContext";
import { SearchProvider } from "./SearchContext";

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SolanaProvider>
      <AutoConnectProvider>
        <AnchorProviderProvider>
          <ClockworksProvider>
            <ThreadProgramProvider>
              <SearchProvider>{children}</SearchProvider>
            </ThreadProgramProvider>
          </ClockworksProvider>
        </AnchorProviderProvider>
      </AutoConnectProvider>
    </SolanaProvider>
  );
};
