import { BN, web3 } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { useSearch } from "contexts/SearchContext";
import { useSolana } from "contexts/SolanaContext";
import { FC, ReactElement, useMemo } from "react";
import { getExplorerAccountLink } from "utils/general";
import { DataTable, DataTableRow, DataTableRowExpandable } from "../DataTable";

export const AccountRenderer = () => {
  const { data } = useSearch();

  if (!data)
    return <div className="py-6 rounded-lg flex flex-col space-y-6"></div>;
  console.log({ data });

  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5 mb-6">
        {data.accountType[0].toUpperCase() + data.accountType.slice(1)}
      </h2>
      <DataTable>
        <RecursiveAccountRenderer account={data.account || data.accountInfo} />
      </DataTable>
    </div>
  );
};

const tryIsBuffer = (value: any) => {
  try {
    console.log("value: ", value);
    return Buffer.isBuffer(value);
  } catch (error) {
    return false;
  }
};

const tryIntoPubkey = (value: any) => {
  try {
    console.log("value: ", value);
    return new PublicKey(value).toBase58();
  } catch (error) {
    return false;
  }
};

export const RecursiveAccountRenderer: FC<{ account: Record<any, any> }> = ({
  account,
}) => {
  const { cluster } = useSolana();
  let entries = useMemo(() => Object.entries(account), [account]);

  const mapEntriesToComponents = (entries: [string, any][], depth = 0) => {
    return entries.map(([name, value], i) => {
      //   console.log(name, value);

      console.log("type: ", typeof value);

      if (typeof value === "boolean") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={value ? "true" : "false"}
          />
        );
      }

      if (typeof value === "string") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={value}
          />
        );
      }

      if (typeof value === "number") {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={value}
          />
        );
      }

      if (value instanceof web3.PublicKey || value instanceof PublicKey) {
        const link = getExplorerAccountLink(value, cluster.network);
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={value.toBase58()}
            link={link}
          />
        );
      }

      if (value instanceof BN) {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={value.toString()}
            fontMono
          />
        );
      }

      if (tryIsBuffer(value)) {
        return (
          <DataTableRow
            key={`${name}_${i}_${depth}`}
            label={name}
            depth={depth}
            value={JSON.stringify(value)}
          />
        );
      }

      if (typeof value === "object") {
        try {
          const children = mapEntriesToComponents(
            Object.entries(value),
            depth + 1
          );
          return (
            <DataTableRowExpandable label={name} depth={depth}>
              {children}
            </DataTableRowExpandable>
          );
        } catch (error) {
          console.log(value);
        }
      }
    });
  };

  return <>{mapEntriesToComponents(entries, 0)}</>;
};
