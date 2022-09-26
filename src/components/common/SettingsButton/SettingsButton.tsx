import { FC, useEffect, useRef, useState } from "react";
import { CogIcon } from "@heroicons/react/outline";
import {
  CLUSTERS,
  CUSTOM_RPC_CLUSTER,
  useSolana,
} from "contexts/SolanaContext";
import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { toast } from "react-toastify";
import { SettingsNetworkMenu } from './SettingsNetworkMenu';
import { SettingsProgramSelectorMenu } from "./SettingsProgramSelectorMenu";

type SettingButtonProps = {};

export const SettingsButton: FC<SettingButtonProps> = () => {
  // const { setCustomEndpoint, cluster, setCluster, isActiveCluster } =
  //   useSolana();

  // const [endpoint, setEndpoint] = useState(CUSTOM_RPC_CLUSTER.endpoint);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dropdownRef, showDropdown, () => setShowDropdown(false));

  // useEffect(() => {
  //   let debounceTimer: NodeJS.Timeout;

  //   if (cluster.network === "custom") {
  //     debounceTimer = setTimeout(() => {
  //       try {
  //         const endpointURL = new URL(endpoint);
  //         setCustomEndpoint(endpointURL.toString());
  //         toast.success("RPC endpoint updated!");
  //       } catch (e) {
  //         console.error(e);
  //         toast.error("Invalid RPC endpoint");
  //         setCustomEndpoint(CUSTOM_RPC_CLUSTER.endpoint);
  //       }
  //     }, 1500);
  //   }

  //   return () => clearTimeout(debounceTimer);
  //   // TODO: setCustomEndpoint is changing, and hence the useEffect keeps running, need to solve?
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [endpoint]);

  return (
    <div className="relative flex justify-end" ref={dropdownRef}>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className="cursor-pointer m-6"
      >
        <CogIcon className="h-6 w-6 text-[#979797] dark:text-white" />
      </div>
      <SettingsNetworkMenu open={showDropdown} />
    </div>
  );
};
