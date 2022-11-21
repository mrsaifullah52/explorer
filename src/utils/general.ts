import { format } from "date-fns";
import { PublicKey } from "@solana/web3.js";
import { ClusterType } from "./constants";

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getExplorerLink(txSig: string, cluster: ClusterType): string {
  return `https://explorer.solana.com/tx/${txSig}?cluster=${
    cluster === "mainnet-beta" ? null : cluster
  }`;
}

export function getExplorerAccountLink(
  account: PublicKey,
  cluster: ClusterType
): string {
  return `/address/${account.toString()}${
    cluster === "mainnet-beta" ? '' : "?network=" + cluster
  }`;
}

export const formatTrigger = (trigger: any) => {
  if (trigger?.cron) {
    return `Cron: ${trigger.cron.schedule}`;
  }
  return "Instant";
};

export const formatExecCtx = (execContext: any) => {
  if (execContext?.cron) {
    return `Cron: ${formatUnix(execContext.cron.startedAt.toNumber())}`;
  }
  return "Instant";
};

export const formatUnix = (unix: number) => {
  return format(new Date(unix * 1000), "PPPppp");
};

export const tryIsBuffer = (value: any) => {
  try {
    console.log("value: ", value);
    return Buffer.isBuffer(value);
  } catch (error) {
    return false;
  }
};

export const tryIntoPubkey = (value: any) => {
  try {
    console.log("value: ", value);
    return new PublicKey(value);
  } catch (error) {
    return undefined;
  }
};

export const tryIsAccounts = (value: any) => {
  try {
    console.log("value: ", value);
    return new PublicKey(value).toBase58();
  } catch (error) {
    return false;
  }
};
