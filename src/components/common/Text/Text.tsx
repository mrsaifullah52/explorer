import { FC, ReactNode } from "react";

export type TextType = "heading1" | "heading2" | "normal";

type TextProps = {
  type: TextType;
  children: ReactNode;
  className?: string;
};

export const Text: FC<TextProps> = ({ type, className = "", children }) => {
  if (type === "heading1") {
    return (
      <h1 className="text-4xl text-black-100 dark:text-white font-semibold font-header">
        {children}
      </h1>
    );
  }

  if (type === "heading2") {
    return (
      <h2 className="text-2xl text-black-100 dark:text-white font-semibold font-header leading-5">
        {children}
      </h2>
    );
  }

  if (type === "normal") {
    return (
      <div
        className={`text-xl text-gray-100 dark:text-white font-normal font-body ${className}`}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
