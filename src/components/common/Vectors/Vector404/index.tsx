import { FC, useEffect, useState } from "react";
import { Vector404LightTheme } from "./Vector404LightTheme";
import { Vector404DarkTheme } from "./Vector404DarkTheme";
import { useTheme } from "next-themes";

type Vector404Props = {};

export const Vector404: FC<Vector404Props> = () => {
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (theme === "light") {
    return <Vector404LightTheme />;
  }

  return <Vector404DarkTheme />;
};

export default Vector404;
