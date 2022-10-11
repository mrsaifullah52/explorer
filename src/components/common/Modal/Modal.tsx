import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { useRef } from "react";

export const Modal = ({ open, setOpen, title = "", children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(modalRef, open, () => setOpen(false));

  return (
    <>
      {open && (
        <div className="fixed bg-black/[0.3] w-full h-full top-0 left-0">
          <div
            ref={modalRef}
            className="min-w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-4 p-10 bg-[#F8F9F9] dark:bg-[#393939] rounded-lg flex flex-col shadow-md"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5">
                {title}
              </h2>
              <span className="cursor-pointer" onClick={() => setOpen(false)}>
                <img
                  src="/icons/close.svg"
                  alt="close"
                  width="16px"
                  height="16px"
                />
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
