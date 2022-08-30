import React, { useCallback } from "react";
import { useQueues } from "hooks/useQueues";
// import { useQueuesSWR } from "hooks/useQueuesSWR";

import {
  DataTable,
  DataTableRow,
  DataTableRowExpandable,
  DataTableRowInline,
} from "../DataTable";
import { SkeletonBox } from "../Skeleton";
import { format } from "date-fns";
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
    <div className="bg-cyan-800 rounded w-full">
      <div className="w-full p-4 md:px-8 border-b-2 border-b-cyan-600">
        <h3 className="font-medium text-lg">Overview</h3>
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
