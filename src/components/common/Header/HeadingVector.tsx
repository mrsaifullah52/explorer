import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LogoSvg } from "./Logo";
import { useMediaQuery } from "react-responsive";

type HeadingVectorProps = {};

export const HeadingVector: FC<HeadingVectorProps> = () => {
  const { theme } = useTheme();
  const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

  // useEffect only runs on the client, so now we can safely show the UI
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <LogoSvg theme={theme} isMobile={isMobile} />
    </div>
  );
};

export default HeadingVector;
