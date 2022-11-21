interface PaginationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  type: "prev" | "next";
}

export const PaginationButton = ({ type, ...props }: PaginationButtonProps) => {
  return (
    <button
      className="py-2.5 px-6 bg-[#E7EAED] hover:bg-[#D7DCE1] text-[#0E1114] text-sm rounded-lg"
      {...props}
      data-cy="pagination-btn"
    >
      {type === "prev" ? "Prev" : "Next"}
    </button>
  );
};
