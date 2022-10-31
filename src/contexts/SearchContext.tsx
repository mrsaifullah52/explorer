import { AccountInfo } from "@solana/web3.js";
import { useAddressAll } from "hooks/useAddressAll";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface SearchState {
  data?: { accountInfo: AccountInfo<any>; account?: any; accountType: string };
  error?: Error;
  loading?: boolean;
  address: string;
  setAddress: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchState>({} as SearchState);

export const SearchProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [address, setAddress] = useState("");

  const { data, error, loading } = useAddressAll(address);

  return (
    <SearchContext.Provider
      value={{ data, error, loading, address, setAddress }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchState {
  return useContext(SearchContext);
}
