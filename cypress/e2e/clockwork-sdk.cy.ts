/// <reference types="cypress" />

import {
  getExplorerUrl,
  classNames,
  formatUnix,
  getExplorerLink,
  formatTrigger,
  formatExecCtx,
  ClusterType,
} from "@clockwork-xyz/sdk";
import BigNumber from "bignumber.js";
// import { ClusterType } from "./constants";

describe("Unit Test Clockwork TS SDK", function () {
  before(() => {
    // check if the import worked correctly
    expect(getExplorerUrl, "getExplorerUrl").to.be.a("function");
  });

  context("utils", function () {
    it("getExplorerUrl localnet", () => {
      const endpoint = "localnet";
      const viewTypeOrItemAddress = "inspector";
      const itemType = "address";
      const tobe =
        "https://explorer.solana.com/address/inspector?cluster=custom&customUrl=http%3A%2F%2F127.0.0.1%3A8899";
      expect(getExplorerUrl(endpoint, viewTypeOrItemAddress, itemType)).to.eq(
        tobe
      );
    });

    it("classNames", () => {
      const class1 = "flex";
      const class2 = "items-center";
      expect(classNames(class1, class2)).to.eq("flex items-center");
    });

    it("getExplorerLink", () => {
      const txSig =
        "5PXd39roXisjzqGMKwn8JXQnW74XYRheJv7dqBY41UYv9CYp3E3zHemmujJGaJT44UViGousNBjHarVG1tKwGn9n";
      const cluster: ClusterType = "devnet";
      const expected =
        "https://explorer.solana.com/tx/5PXd39roXisjzqGMKwn8JXQnW74XYRheJv7dqBY41UYv9CYp3E3zHemmujJGaJT44UViGousNBjHarVG1tKwGn9n?cluster=devnet";
      expect(getExplorerLink(txSig, cluster)).to.eq(expected);
    });

    it("formatTrigger", () => {
      const trigger = { cron: { schedule: "* * * * * *" } };
      const hasCronResult = "Cron: * * * * * *";
      const noCronResult = "Instant";
      expect(formatTrigger(trigger)).to.eq(hasCronResult);
      expect(formatTrigger(null)).to.eq(noCronResult);
    });

    it("formatExecCtx", () => {
      const trigger = { cron: { startedAt: new BigNumber("1668007710") } };
      // Formatting varies based on the clock of the testing environment.
      // const hasCronResult = "Cron: November 9th, 2022 at 10:28:30 AM GMT-5";
      const beginsWithCronResult = "Cron: November";
      const noCronResult = "Instant";
      expect(formatExecCtx(trigger).slice(0, 14)).to.eq(beginsWithCronResult);
      expect(formatExecCtx(null)).to.eq(noCronResult);
    });

    it("formatUnix", () => {
      const timestamp = 1668007710;
      // Formatting varies based on the clock of the testing environment.
      // const expected = "November 9th, 2022 at 10:28:30 AM GMT-5";
      const expected = "November";
      expect(formatUnix(timestamp).slice(0, 8)).to.eq(expected);
    });
  });
});
