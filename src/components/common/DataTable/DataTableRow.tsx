import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

export const DataTableRow = ({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: string;
}) => {
  if (link) {
    return (
      <tr className="text-[#979797] hover:text-[#0E1114] dark:hover:text-white hover:bg-white dark:hover:bg-[#5A5A5A] cursor-pointer w-full">
        <td className="whitespace-nowrap p-0">
          <Link href={link}>
            <p className="text-sm p-4 md:px-8 ">{label}</p>
          </Link>
        </td>
        <td className="whitespace-nowrap p-0">
          <Link href={link}>
            <span
              // rel="noopener noreferrer"
              className="p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2"
            >
              <p className="text-sm text-[#0E1114] dark:text-white font-light font-['IBM_Plex_Mono']">
                {value}
              </p>
              <ExternalLinkIcon className="h-4 w-4 cursor-pointer" />
            </span>
          </Link>
        </td>
      </tr>
    );
  }
  return (
    <tr className="text-[#979797]">
      <td className="text-sm p-4 md:px-8 whitespace-nowrap">{label}</td>
      <td className="p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
        <p className="text-sm text-[#0E1114] dark:text-white font-light ">
          {value}
        </p>
      </td>
    </tr>
  );
};
