import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const DataTableRow = ({
  label,
  value,
  link,
  fontMono = false,
  depth = 0,
}: {
  label: string;
  value: string | number;
  link?: string;
  fontMono?: boolean;
  depth?: number;
}) => {
  const xPadding = `py-4 px-4  md:px-8`;
  if (link) {
    return (
      <div  style={{ paddingLeft: depth * 16 }} className={`flex justify-between ${depth === 0 ? "border-b" : ""} border-[#E7EAED] dark:border-[#626262] text-[#979797] hover:text-[#0E1114] dark:hover:text-white hover:bg-white dark:hover:bg-[#5A5A5A] cursor-pointer w-full`}>
        <div className="whitespace-nowrap p-0">
          <Link href={link}>
            <p className={`text-sm ${xPadding}`}>{label}</p>
          </Link>
        </div>
        <div className="whitespace-nowrap p-0">
          <Link href={link}>
            <span
              // rel="noopener noreferrer"
              className={`${xPadding} whitespace-nowrap flex justify-end items-center space-x-2`}
            >
              <p className="text-sm text-[#0E1114] dark:text-white font-light font-['IBM_Plex_Mono']">
                {value}
              </p>
              <ExternalLinkIcon className="h-4 w-4 cursor-pointer" />
            </span>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div  style={{ paddingLeft: depth * 16 }} className={`flex justify-between ${depth === 0 ? "border-b" : ""} border-[#E7EAED] dark:border-[#626262] text-[#979797]`}>
      <div className={`text-sm ${xPadding} whitespace-nowrap`}>{label}</div>
      <div
        className={`${xPadding} whitespace-nowrap flex justify-end items-center space-x-2`}
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
