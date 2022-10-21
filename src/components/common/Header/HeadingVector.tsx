import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { HeadingVector as HeadingVectorLight } from "./HeadingVectorLight";
import { HeadingVector as HeadingVectorDark } from "./HeadingVectorDark";
import { useTheme } from "next-themes";

type HeadingVectorProps = {};

export const HeadingVector: FC<HeadingVectorProps> = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  
  // useEffect only runs on the client, so now we can safely show the UI
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (theme === 'light') {
    return  <HeadingVectorLight />
  }

    return <HeadingVectorDark />
};

export default HeadingVector;
