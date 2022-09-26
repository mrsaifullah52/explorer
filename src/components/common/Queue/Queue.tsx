import React from "react";
import {
  DataTable,
  DataTableRow,
  DataTableRowExpandable,
  DataTableRowInline,
} from "../DataTable";
import {
  formatExecCtx,
  formatTrigger,
  formatUnix,
  getExplorerAccountLink,
} from "utils/general";
import { useSolana } from "contexts/SolanaContext";

export const Queue = ({ q }) => {
  const { cluster } = useSolana();
  return (
    <div className="rounded-lg w-full">
      <div className="w-full py-6">
        <h3 className="font-semibold text-2xl text-[#0E1114] dark:text-white font-['Inter'] leading-5 mb-6">
          Overview
        </h3>
        <DataTable>
          <DataTableRow
            label="Queue"
            value={q.publicKey.toBase58()}
            link={getExplorerAccountLink(
              q.publicKey.toBase58(),
              cluster.network
            )}
          />
          <DataTableRow
            label="Authority"
            value={q.account.authority.toBase58()}
            link={getExplorerAccountLink(
              q.account.authority.toBase58(),
              cluster.network
            )}
          />
          <DataTableRow label="Name" value={q.account.name} />
          <DataTableRow
            label="Executon Context"
            value={formatExecCtx(q.account.execContext)}
          />
          <DataTableRow
            label="Trigger"
            value={formatTrigger(q.account.trigger)}
          />
          <DataTableRow
            label="Created At"
            value={formatUnix(q.account.createdAt.unixTimestamp.toNumber())}
          />
          <DataTableRowExpandable label="First Instruction">
            <DataTableRowInline
              label="Program Id"
              value={q.account.firstInstruction.programId.toBase58()}
              link={getExplorerAccountLink(
                q.account.firstInstruction.programId.toBase58(),
                cluster.network
              )}
            />
            {q.account.firstInstruction?.accounts.map(
              ({ isSigner, isWritable, pubkey }, i) => {
                return (
                  <DataTableRowInline
                    key={`account-${i}`}
                    label={`Account ${i}`}
                    value={pubkey.toBase58()}
                    link={getExplorerAccountLink(
                      pubkey.toBase58(),
                      cluster.network
                    )}
                  />
                );
              }
            )}
            <DataTableRowInline
              label="Data"
              value={JSON.stringify(q.account.nextInstruction?.data)}
            />
          </DataTableRowExpandable>
          <DataTableRowExpandable label="Next Instruction">
            <DataTableRowInline
              label="Program Id"
              value={q.account.nextInstruction?.programId?.toBase58()}
              link={getExplorerAccountLink(
                q.account.nextInstruction?.programId.toBase58(),
                cluster.network
              )}
            />
            {q.account.nextInstruction?.accounts.map(
              ({ isSigner, isWritable, pubkey }, i) => {
                return (
                  <DataTableRowInline
                    key={`account-${i}`}
                    label={`Account ${i}`}
                    value={pubkey.toBase58()}
                    link={getExplorerAccountLink(
                      pubkey.toBase58(),
                      cluster.network
                    )}
                  />
                );
              }
            )}
            <DataTableRowInline
              label="Data"
              value={JSON.stringify(q.account.nextInstruction?.data)}
            />
          </DataTableRowExpandable>
        </DataTable>
      </div>
    </div>
  );
};
