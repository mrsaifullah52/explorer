import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Modal = ({ open, setOpen, title = "", children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(modalRef, open, () => setOpen(false));
  const { theme } = useTheme();

  return (
    <>
      {open && (
        <div className="fixed bg-black/[0.3] w-full h-full top-0 left-0 z-50">
          <div
            ref={modalRef}
            className="min-w-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-4 p-10 bg-[#F8F9F9] dark:bg-[#393939] rounded-lg flex flex-col shadow-md z-50"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5">
                {title}
              </h2>
              <div>
                <button
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="w-6 h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2L36 36M2 36L36 2"
                      stroke={theme === "dark" ? "white" : "black"}
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
