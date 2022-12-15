import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { WalletButton } from "../WalletButton";
import { Text } from "../Text";

export default function ConnectScreen() {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center">
        <div className="w-6/12">
          <Text type="heading1">Welcome to the factory!</Text>
          <Text type="normal" className="my-5">
            Connect your wallet to start building blockchain automations.
          </Text>
          <WalletButton className="justify-start" />
        </div>
        <div className="w-6/12">
          <Image
            src={
              theme === "dark"
                ? "/images/clockwork-dark.svg"
                : "/images/clockwork.svg"
            }
            width="511"
            height="511"
            alt="clockwork"
          />
        </div>
      </div>
    </div>
  );
}
