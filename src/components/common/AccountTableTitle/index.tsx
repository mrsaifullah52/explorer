import { toSentenceCase } from "utils/toSentenceCase";

export const ACCOUNT_TITLE_ALIAS = {
  Queue: "Thread",
};

const renderAccountTypeTitle = (accountType: string) => {
  const title = toSentenceCase(accountType);
  try {
    return ACCOUNT_TITLE_ALIAS[title];
  } catch (error) {
    return title;
  }
};

export const AccountTableTitle = ({ accountType }) => {
  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5 mb-6">
        {renderAccountTypeTitle(accountType)}
      </h2>
    </div>
  );
};
