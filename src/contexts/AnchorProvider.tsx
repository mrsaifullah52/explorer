import React, { useContext } from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider } from '@project-serum/anchor';
import { Keypair, Connection } from '@solana/web3.js';
import { useSolana } from './SolanaContext';

const AnchorProviderContext = React.createContext<AnchorProvider | undefined>(undefined);

export const AnchorProviderProvider: React.FC = ({ children }) => {
  const { cluster } = useSolana();
  const wallet = useAnchorWallet();
  const provider = React.useMemo(() => {
    if (!wallet) {
      // @ts-ignore
      return new AnchorProvider(new Connection(cluster.endpoint), Keypair.generate(), {});
    }
    const provider = new AnchorProvider(new Connection(cluster.endpoint), wallet, {});

    return provider;
  }, [cluster.endpoint, wallet]);

  return (
    <AnchorProviderContext.Provider value={provider}>
      {children}
    </AnchorProviderContext.Provider>
  );
};

export const useAnchorProvider = () => {
  const context = useContext(AnchorProviderContext);

  return context;
};
