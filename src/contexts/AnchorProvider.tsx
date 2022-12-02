import React, { useContext } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { AnchorProvider } from '@project-serum/anchor';
import { Keypair, Connection } from '@solana/web3.js';
import { useSolana } from './SolanaContext';

const AnchorProviderContext = React.createContext<AnchorProvider | undefined>(undefined);

export const AnchorProviderProvider: React.FC = ({ children }) => {
  const { cluster } = useSolana();
  const {connection} = useConnection();
  console.log('connection', connection);
  const wallet = useAnchorWallet();
  const provider = React.useMemo(() => {
    console.log('cluster', cluster)
    if (!wallet) {
      // @ts-ignore
      return new AnchorProvider(connection, Keypair.generate(), {});
    }
    const provider = new AnchorProvider(connection, wallet, {
      "preflightCommitment": "processed",
      "commitment": "processed"
  });

    return provider;
  }, [cluster.endpoint, connection, wallet]);

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
