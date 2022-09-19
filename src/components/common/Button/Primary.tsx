export const PrimaryButton = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={`border border-[#0E1114] dark:border-white text-sm text-[#0E1114] dark:text-white align-middle justify-center pt-5 pb-5 pr-10 pl-10 ${
        className ? className : ""
      }`}
      {...rest}
    />
  );
};
