import {
  ClipboardCopyIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export const DataTableRowBuffer = ({
  label,
  value,
  depth = 0,
}: {
  label: string;
  value: Buffer;
  depth?: number;
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      style={{ paddingLeft: depth * 16 }}
      className={`flex justify-between ${
        depth === 0 ? "border-b" : ""
      } border-[#E7EAED] dark:border-[#626262] text-[#979797]`}
    >
      <div className={`text-sm py-4 px-4 md:px-8 whitespace-nowrap`}>
        {label + " (Hex)"}
      </div>
      <div
        className={`py-4 px-4 md:px-8 whitespace-nowrap flex justify-end items-center space-x-2`}
      >
        <button>
          {copied ? (
            <span className="flex">
              <span className="text-sm">Copied</span>
              <span>
                <ClipboardCheckIcon className="h-4 w-4" />
              </span>
            </span>
          ) : (
              <ClipboardCopyIcon
                className="h-4 w-4 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(value.toString("hex"));
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                }}
              />
          )}
        </button>
        <p
          className={`p-1 rounded-md bg-[#E7EAED] dark:bg-[#626262] text-sm text-[#0E1114] dark:text-white font-light "font-['IBM_Plex_Mono']"`}
        >
          {styleString(value)}
        </p>
      </div>
    </div>
  );
};

const styleString = (buffer) => {
  const output = [];
  const hexString = buffer.toString("hex");
  for (let i = 0; i < hexString.length; i++) {
    const char = hexString[i];
    if (i % 2) {
      output.push(char + " ");
    } else {
      output.push(char);
    }
  }
  return output;
};
