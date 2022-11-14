import { PublicKey } from "@solana/web3.js";
import {
  classNames,
  formatUnix,
  getExplorerLink,
  getExplorerAccountLink,
} from "../../../utils/general";
import { ClusterType } from "../../../utils/constants";

test("classNames", () => {
  const class1 = "flex";
  const class2 = "items-center";
  expect(classNames(class1, class2)).toBe("flex items-center");
});

test("getExplorerLink", () => {
  const txSig =
    "5PXd39roXisjzqGMKwn8JXQnW74XYRheJv7dqBY41UYv9CYp3E3zHemmujJGaJT44UViGousNBjHarVG1tKwGn9n";
  const cluster: ClusterType = "devnet";
  const expected =
    "https://explorer.solana.com/tx/5PXd39roXisjzqGMKwn8JXQnW74XYRheJv7dqBY41UYv9CYp3E3zHemmujJGaJT44UViGousNBjHarVG1tKwGn9n?cluster=devnet";
  expect(getExplorerLink(txSig, cluster)).toBe(expected);
});

test("getExplorerAccountLink", () => {
  const account: PublicKey = new PublicKey(
    "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
  );
  const cluster: ClusterType = "devnet";
  const expected =
    "https://explorer.solana.com/tx/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m?cluster=devnet";
  expect(getExplorerAccountLink(account, cluster)).toBe(expected);
});

test("formatUnix", () => {
  const timestamp = 1668007710;
  expect(formatUnix(timestamp)).toBe("November 9th, 2022 at 10:28:30 AM GMT-5");
});
