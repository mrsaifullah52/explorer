import { ReactNode } from "react";

export const DataTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto border dark:border-[#626262] rounded-lg">
      <table className="table-auto w-full">
        <tbody className="divide-y divide-[#E7EAED] dark:divide-[#626262]">{children}</tbody>
      </table>
    </div>
  );
};
