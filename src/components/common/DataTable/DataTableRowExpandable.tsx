import { ChevronDownIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";

export const DataTableRowExpandable = ({
  label,
  children,
  depth = 0,
}: {
  label: string;
  children?: ReactNode;
  depth?: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const xPadding = `py-4 px-${depth + 4}  md:px-${depth + 8}`;

  return (
    <div className={`border-b border-[#E7EAED] dark:border-[#626262] w-full`}>
      <div
        style={{ paddingLeft: depth * 16 }}
        className={`
        flex justify-between border-[#E7EAED] dark:border-[#626262]
        ${
          expanded ? "text-[#0E1114] dark:text-white" : "text-[#979797]"
        } w-full hover:text-[#0E1114] hover:bg-white dark:hover:bg-[#5A5A5A] dark:hover:text-white cursor-pointer`}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="text-sm font-medium p-4 md:px-8 whitespace-nowrap">
          {label}
        </div>
        <div className="text-sm font-light p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
          {!expanded ? <p>Show</p> : <p>Hide</p>}
          <ChevronDownIcon
            className={`h-4 w-4 cursor-pointer ${
              expanded ? "text-[#0E1114] dark:text-white" : ""
            }  ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </div>
      {expanded ? children : null}
    </div>
  );
};
