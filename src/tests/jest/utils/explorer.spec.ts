import { getExplorerUrl } from "../../../utils/explorer";

test("getExplorerUrl localnet", () => {
  const endpoint = "localnet";
  const viewTypeOrItemAddress = "inspector";
  const itemType = "address";
  const tobe =
    "https://explorer.solana.com/address/inspector?cluster=custom&customUrl=http%3A%2F%2F127.0.0.1%3A8899";
  expect(getExplorerUrl(endpoint, viewTypeOrItemAddress, itemType)).toBe(tobe);
});
