import { ArrowUpIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { CopyButton } from "../CopyButton";

export type DataTableRowProps = {
  label: string;
  value: string | number;
  link?: string;
  fontMono?: boolean;
  depth?: number;
};

export const DataTableRow = ({
  label,
  value,
  link,
  fontMono = false,
  depth = 0,
}: DataTableRowProps) => {
  if (link) {
    return (
      <div
        style={{ paddingLeft: depth * 16 }}
        className={`flex justify-between ${
          depth === 0 ? "border-b" : ""
        } border-[#E7EAED] dark:border-[#626262] text-[#979797] w-full`}
      >
        <div className="whitespace-nowrap p-0">
          <p className={`text-sm py-4 px-4 md:px-8`}>{label}</p>
        </div>
        <div className="whitespace-nowrap p-0">
          <span
            className={`py-4 px-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2`}
          >
            <CopyButton valueToCopy={value} />
            <Link href={link}>
              <div className="flex items-center space-x-2">
                <p className="space-x-2 text-sm text-[#0E1114] dark:text-white hover:underline font-light font-['IBM_Plex_Mono']">
                  {value}
                </p>
                <ArrowUpIcon className="h-4 w-4 cursor-pointer hover:text-[#0E1114] hover:dark:text-white rotate-45" />
              </div>
            </Link>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{ paddingLeft: depth * 16 }}
      className={`flex justify-between ${
        depth === 0 ? "border-b" : ""
      } border-[#E7EAED] dark:border-[#626262] text-[#979797]`}
    >
      <div className={`text-sm py-4 px-4 md:px-8 whitespace-nowrap`}>
        {label}
      </div>
      <div
        className={`py-4 px-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2`}
      >
        <p
          className={`text-sm text-[#0E1114] dark:text-white font-light ${
            fontMono ? "font-['IBM_Plex_Mono']" : ""
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};
