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
      <tr
        className={`${
          expanded ? "text-[#0E1114] dark:text-white" : "text-[#979797]"
        } hover:text-[#0E1114] hover:bg-white dark:hover:bg-[#5A5A5A] dark:hover:text-white cursor-pointer w-full`}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <td className="text-sm font-medium p-4 md:px-8 whitespace-nowrap">
          {label}
        </td>
        <td className="text-sm font-light p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
          {!expanded ? <p>Show</p> : <p>Hide</p>}
          <ChevronDownIcon
            className={`h-4 w-4 cursor-pointer ${
              expanded ? "text-[#0E1114] dark:text-white" : ""
            }  ${expanded ? "rotate-180" : ""}`}
          />
        </td>
      </tr>
      {expanded ? children : null}
    </>
  );
};
