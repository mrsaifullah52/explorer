import { ChevronDownIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";

export const DataTableRowExpandable = ({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr>
        <td className="text-sm text-[#0E1114] font-medium p-4 md:px-8 whitespace-nowrap">
          {label}
        </td>
        <td className="text-sm text-[#0E1114] font-light p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
          <ChevronDownIcon
            className={`h-4 w-4 cursor-pointer  text-[#979797] ${expanded ? "rotate-180" : ""}`}
            onClick={() => setExpanded((prev) => !prev)}
          />
        </td>
      </tr>
      {expanded ? children : null}
    </>
  );
};
