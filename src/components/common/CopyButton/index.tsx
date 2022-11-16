import {
  ClipboardCopyIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export const CopyButton = ({ valueToCopy }) => {
  const [copied, setCopied] = useState(false);
  return (
    <button className="flex items-center">
      {copied ? (
        <span className="flex text-[#0E1114] dark:text-white">
          <span className="text-xs mr-1">Copied</span>
          <span>
            <ClipboardCheckIcon className="h-4 w-4" />
          </span>
        </span>
      ) : (
        <ClipboardCopyIcon
          className="h-4 w-4 cursor-pointer hover:text-[#0E1114] hover:dark:text-white"
          onClick={() => {
            navigator.clipboard.writeText(valueToCopy);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
        />
      )}
    </button>
  );
};
