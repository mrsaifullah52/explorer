import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { useRef } from "react";

export const Modal = ({ open, setOpen, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(modalRef, open, () => setOpen(false));

  return (
    <>
      {open && (
        <div className="fixed bg-black/[0.3] w-full h-full top-0 left-0">
          <div
            ref={modalRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 my-4 p-10 bg-[#F8F9F9] dark:bg-[#393939] rounded-lg flex flex-col shadow-md"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
