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
          expanded ? "text-[#0E1114]" : "text-[#979797]"
        } hover:text-[#0E1114] hover:bg-white cursor-pointer w-full`}
        onClick={() => setExpanded((prev) => !prev)}
      >
        <td className="text-sm font-medium p-4 md:px-8 whitespace-nowrap">
          {label}
        </td>
        <td className="text-sm font-light p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
          <ChevronDownIcon
            className={`h-4 w-4 cursor-pointer ${
              expanded ? "text-[#0E1114]" : "text-[#979797]"
            }  ${expanded ? "rotate-180" : ""}`}
          />
        </td>
      </tr>
      {expanded ? children : null}
    </>
  );
};

// import { ExternalLinkIcon } from "@heroicons/react/outline";

// export const DataTableRow = ({
//   label,
//   value,
//   link,
// }: {
//   label: string;
//   value: string;
//   link?: string;
// }) => {
//   if (link) {
//     return (
//       <tr className="text-[#979797] hover:text-[#0E1114] hover:bg-white cursor-pointer w-full">
//         <td className="whitespace-nowrap p-0">
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             <p className="text-sm p-4 md:px-8 ">{label}</p>
//           </a>
//         </td>
//         <td className="whitespace-nowrap p-0">
//           <a
//             href={link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2"
//           >
//             <p className="text-sm text-[#0E1114] font-light ">{value}</p>
//             <ExternalLinkIcon className="h-4 w-4 cursor-pointer" />
//           </a>
//         </td>
//       </tr>
//     );
//   }
//   return (
//     <tr className="text-[#979797]">
//       <td className="text-sm p-4 md:px-8 whitespace-nowrap">{label}</td>
//       <td className="p-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2">
//         <p className="text-sm text-[#0E1114] font-light ">{value}</p>
//       </td>
//     </tr>
//   );
// };
