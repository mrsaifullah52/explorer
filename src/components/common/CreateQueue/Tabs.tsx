import React from "react";
import ReactTooltip from "react-tooltip";

const threadTitles: string[] = [
  "Hello world",
  "Payments",
  "Dollar Cost Averaging",
  "Serum Crank",
  "Preset name",
];

type TabsType = {
  activeTab: number;
  setActiveTab: (index: number) => void;
};

export default function Tabs({ activeTab, setActiveTab }: TabsType) {
  return (
    <div className="gap-2.5 flex my-5">
      {threadTitles.map((title: string, index: number) => {
        return (
          <button
            key={`button_${title}_${index}`}
            onClick={() => setActiveTab(index)}
            className={`btn px-3 py-1 rounded h-10 text-sm font-medium ${
              activeTab === index
                ? "border bg-[#0E1114] dark:bg-[#FFFFFF] border-[#0E1114] dark:border-[#FFFFFF] text-gray-100 dark:text-[#000000]"
                : "border hover:bg-[#0E111410] hover:dark:bg-[#FFFFFF10] border-[#0E111410] dark:border-[#FFFFFF10] rounded"
            }`}
            data-html={true}
            data-tip={index !== 0 ? "Coming soon!" : ""}
            // disabled={index !== 0}
          >
            {title}
          </button>
        );
      })}
      <ReactTooltip />
    </div>
  );
}
