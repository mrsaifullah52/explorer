import React, { useContext } from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { AnchorProvider } from '@project-serum/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Keypair } from '@solana/web3.js';

const AnchorProviderContext = React.createContext<AnchorProvider | undefined>(undefined);

export const AnchorProviderProvider: React.FC = ({ children }) => {
  const connection = useConnection();
  const wallet = useAnchorWallet();
  const provider = React.useMemo(() => {
    if (!connection) {
      return undefined
    }
    if (!wallet) {
      // @ts-ignore
      return new AnchorProvider(connection.connection, Keypair.generate(), {});
    }
    const provider = new AnchorProvider(connection.connection, wallet, {});

    return provider;
  }, [connection, wallet]);

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
