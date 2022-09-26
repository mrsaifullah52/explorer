import { FormEvent, useEffect, useState } from "react";
import { useClockworks } from "contexts/ClockworksContext";
import { CLOCKWORKS_PROGRAMS } from "utils/constants";
import { SettingsMenuLabel } from "./SettingsMenuLabel";

export const SettingsProgramSelectorMenu = () => {
  const { programID, setProgramID } = useClockworks();

  const [isChanging, setIsChanging] = useState(false);
  const [customProgramID, setCustomProgramID] = useState(programID.toString());

  const handleProgramChange = (e: FormEvent) => {
    e.preventDefault();
    setProgramID(customProgramID);
    setIsChanging(false);
  };

  // useEffect(() => {
  //   setCustomProgramID(programID.toString());
  // }, [programID, setCustomProgramID]);

  console.log(programID.toBase58(), customProgramID);
  return (
    <div className="my-2 w-full">
      <SettingsMenuLabel>Program Address</SettingsMenuLabel>
      {/* {!isChanging ? (
        <div className="flex items-center space-x-2.5">
          <p className="text-sm text-white font-normal">
            {CLOCKWORKS_PROGRAMS[programID.toString()]
              ? CLOCKWORKS_PROGRAMS[programID.toString()]
              : `${programID.toString().slice(0, 18)}...`}
          </p>
          <button
            className="text-sm text-white font-normal underline"
            onClick={() => setIsChanging(true)}
          >
            Change
          </button>
        </div>
      ) : ( */}
      <form onSubmit={handleProgramChange}>
        <ul>
          {Object.entries(CLOCKWORKS_PROGRAMS).map(
            ([queueProgramID, programLabel]) => {
              return (
                <li
                  key={queueProgramID}
                  onClick={() => setProgramID(queueProgramID.toString())}
                  className={`${
                    queueProgramID === programID.toBase58()
                      ? "bg-[#E7EAED] dark:bg-[#626262]"
                      : "bg-[#F8F9F9] dark:bg-[#393939]"
                  } hover:bg-[#E7EAED] dark:hover:bg-[#626262] p-2 px-3 cursor-pointer`}
                >
                  <div>
                    <h3 className="text-[#979797] text-xs dark:text-[#979797] font-bold">
                      {programLabel}
                    </h3>
                    <p className="text-[#0E1114] dark:text-white text-xs">
                      {queueProgramID.slice(0, 6)}...{queueProgramID.slice(-6)}
                    </p>
                  </div>
                </li>
              );
              //   <div
              //     key={programID}
              //     className="bg-[#4F4C4C] dark:bg-[#2C2B2B] transition-colors py-2 px-4 rounded-lg flex items-center justify-between cursor-pointer"
              //     onClick={() => setCustomProgramID(programID)}
              //   >
              //     <p className="text-sm text-white">{programLabel}</p>
              //     <p className="text-sm text-white font-light">{programID}</p>
              //   </div>
              // )
            }
          )}

          {isChanging ? (
            <li
              className={`${
                programID.toBase58() === customProgramID
                  ? "bg-[#E7EAED] dark:bg-[#626262]"
                  : "bg-[#F8F9F9] dark:bg-[#393939]"
              } hover:bg-[#E7EAED] dark:hover:bg-[#626262] p-2 px-3 cursor-pointer`}
            >
              <h3 className="text-[#979797] text-xs dark:text-[#979797] font-bold">
                {"Custom Program"}
              </h3>
              <input
                type="text"
                value={customProgramID}
                onChange={(e) => setCustomProgramID(e.target.value)}
                className="border border-[#979797] text-[#0E1114] text-xs dark:text-white p-2 px-3 rounded-lg my-2 w-full bg-[#E7EAED] dark:bg-[#393939] focus:outline-none"
              />
              <button
                type="submit"
                onClick={() => setProgramID(customProgramID)}
                className="px-4 py-1 w-full rounded-lg bg-white hover:bg-[#E7EAED] text-black"
              >
                Confirm
              </button>
            </li>
          ) : (
            <li
              key={"Custom Program"}
              onClick={() => setIsChanging(true)}
              className={`${
                programID.toBase58() === customProgramID
                  ? "bg-[#E7EAED] dark:bg-[#626262]"
                  : "bg-[#F8F9F9] dark:bg-[#393939]"
              } hover:bg-[#E7EAED] dark:hover:bg-[#626262] p-2 px-3 cursor-pointer`}
            >
              <div>
                <h3 className="text-[#979797] text-xs dark:text-[#979797] font-bold">
                  {"Custom Program"}
                </h3>
                <p className="text-[#0E1114] dark:text-white text-xs">
                  {programID.toBase58() === customProgramID
                    ? `${programID.toBase58().slice(0, 6)}...${programID
                        .toBase58()
                        .slice(-6)}`
                    : "Enter custom program."}
                </p>
              </div>
            </li>
          )}
        </ul>
      </form>
      {/* )} */}
    </div>
  );
};
