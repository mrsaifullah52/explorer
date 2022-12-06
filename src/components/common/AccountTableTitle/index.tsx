import { toSentenceCase } from "@clockwork-xyz/sdk";
import SimulateThread from "components/common/SimulateThread";

export const ACCOUNT_TITLE_ALIAS = {
  Queue: "Thread",
};

const renderAccountTypeTitle = (accountType: string) => {
  const title = toSentenceCase(accountType);
  return ACCOUNT_TITLE_ALIAS[title] || title;
};

export const AccountTableTitle = ({ accountType, account }) => {
  return (
    <div className="py-6 rounded-lg flex flex-row items-center justify-between mb-6">
      <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5">
        {renderAccountTypeTitle(accountType)}
      </h2>
      {accountType === "queue" && <SimulateThread account={account} />}
    </div>
  );
};
