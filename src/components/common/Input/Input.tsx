export const Input = ({ className = "", ...props }) => {
  return (
    <input
      type="text"
      className={`w-full p-2 rounded-lg border border-[#D7DCE1] dark:border-[#4F4F4F] bg-transparent focus:outline-none text-sm text-[#979797] ${className}`}
      {...props}
    />
  );
};
