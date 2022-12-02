import React, { useContext } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider } from '@project-serum/anchor';
import { Keypair, Connection } from '@solana/web3.js';
import { useSolana } from './SolanaContext';

const AnchorProviderContext = React.createContext<AnchorProvider | undefined>(undefined);

export const AnchorProviderProvider: React.FC = ({ children }) => {
  const { cluster, customEndpoint } = useSolana();
  // const {connection, } = useConnection();
  const wallet = useAnchorWallet();
  const provider = React.useMemo(() => {
    // console.log('customEndpoint', customEndpoint);
    // console.log('cluster.network', cluster.network)

    const c  = cluster.network === 'custom' ? new Connection(customEndpoint) : new Connection(cluster.endpoint);

    if (!wallet) {
      // @ts-ignore
      return new AnchorProvider(c, Keypair.generate(), {});
    }
    const provider = new AnchorProvider(c, wallet, {
      "preflightCommitment": "processed",
      "commitment": "processed"
  });

    return provider;
  }, [cluster.network, cluster.endpoint, customEndpoint, wallet]);

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
