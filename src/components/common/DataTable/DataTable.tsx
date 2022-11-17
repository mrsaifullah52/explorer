import { ReactNode } from "react";

export const DataTable = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-x-hidden border border-b-0 bg-[#F8F9F9] dark:bg-[#393939]  dark:border-[#626262] rounded-lg">
      <div className="table-auto w-full">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
