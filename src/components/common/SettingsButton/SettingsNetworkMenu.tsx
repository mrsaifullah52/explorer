import { FC, useEffect, useRef, useState } from "react";
import { CogIcon } from "@heroicons/react/outline";
import {
  CLUSTERS,
  CUSTOM_RPC_CLUSTER,
  useSolana,
} from "contexts/SolanaContext";
import { useOutsideAlerter } from "hooks/useOutsideAlerter";
import { toast } from "react-toastify";
import { SettingsProgramSelectorMenu } from "./SettingsProgramSelectorMenu";
import { SettingsMenuLabel } from "./SettingsMenuLabel";

type SettingsNetworkMenuProps = {
  open?: boolean;
};

export const SettingsNetworkMenu: FC<SettingsNetworkMenuProps> = ({
  open = false,
}) => {
  const { setCustomEndpoint, cluster, setCluster, isActiveCluster } =
    useSolana();

  const [endpoint, setEndpoint] = useState(CUSTOM_RPC_CLUSTER.endpoint);
  // const [showDropdown, setShowDropdown] = useState(false);

  // const dropdownRef = useRef<HTMLDivElement>(null);
  // useOutsideAlerter(dropdownRef, showDropdown, () => setShowDropdown(false));

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    if (cluster.network === "custom") {
      debounceTimer = setTimeout(() => {
        try {
          const endpointURL = new URL(endpoint);
          setCustomEndpoint(endpointURL.toString());
          toast.success("RPC endpoint updated!");
        } catch (e) {
          console.error(e);
          toast.error("Invalid RPC endpoint");
          setCustomEndpoint(CUSTOM_RPC_CLUSTER.endpoint);
        }
      }, 1500);
    }

    return () => clearTimeout(debounceTimer);
    // TODO: setCustomEndpoint is changing, and hence the useEffect keeps running, need to solve?
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } absolute top-full w-64 my-4 py-2 bg-[#F8F9F9] dark:bg-[#393939] rounded-lg flex flex-col shadow`}
    >
      <SettingsProgramSelectorMenu />
      <div className="w-full flex px-3 pt-1 pb-2">
        <div className="border-[#E7EAED] dark:border-[#4F4F4F] border-b flex-1" />
      </div>

      <div className="py-2">
        <SettingsMenuLabel>Network</SettingsMenuLabel>
        <ul>
          {CLUSTERS.map((cluster) => {
            if (cluster.label !== "Custom RPC")
              return (
                <li
                  key={cluster.endpoint}
                  onClick={() => setCluster(cluster)}
                  className={`${
                    isActiveCluster(cluster)
                      ? "bg-[#E7EAED] dark:bg-[#626262]"
                      : "bg-[#F8F9F9] dark:bg-[#393939]"
                  } hover:bg-[#E7EAED] dark:hover:bg-[#626262] p-2 px-3 cursor-pointer`}
                >
                  <div>
                    <h3 className="text-[#979797] text-xs dark:text-[#979797] font-bold">
                      {cluster.label}
                    </h3>
                    <p className="text-[#0E1114] dark:text-white text-xs">
                      {cluster.endpoint}
                    </p>
                  </div>
                </li>
              );
          })}
          <li
            className={`${
              isActiveCluster(CUSTOM_RPC_CLUSTER)
                ? "bg-[#E7EAED] dark:bg-[#626262]"
                : "bg-[#F8F9F9] dark:bg-[#393939]"
            } hover:bg-[#E7EAED] dark:hover:bg-[#626262] p-2 px-3 cursor-pointer`}
            onClick={() => setCluster(CUSTOM_RPC_CLUSTER)}
          >
            <div>
              <h3 className="text-[#979797] text-xs font-bold dark:text-[#979797]">
                Custom RPC
              </h3>
              {cluster.label === "Custom RPC" ? (
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  className="border border-[#979797] text-[#0E1114] text-sm dark:text-white p-2 px-3 rounded-lg my-2 w-full bg-[#E7EAED] dark:bg-[#393939] focus:outline-none"
                />
              ) : (
                <p className="text-[#0E1114] dark:text-white text-xs">
                  Enter custom RPC.
                </p>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
