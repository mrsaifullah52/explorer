import { SearchIcon } from "@heroicons/react/outline";
import { useCrankProgram } from "contexts/CrankProgramProvider";
import { useAddressAll } from "hooks/useAddressAll";
import { useRouter } from "next/router";
import { FC, FormEvent, ReactNode, useEffect, useState } from "react";
import { selectIdl } from "contexts/CrankProgramProvider";
import { useClockworks } from "contexts/ClockworksContext";
import * as anchor from "@project-serum/anchor";
import {
  ClockworkCrank as ClockworkCrank_v1_0_3,
  IDL as ClockworkCrankIDLv1_0_3,
} from "anchor/types/clockwork_crank";
import {
  QueueProgram as QueueProgram_v1_2_14,
  IDL as QueueProgramIDL_v1_2_14,
} from "anchor/types/queue_program_v1.2.14";

type SearchBarProps = {};

export const tryDecode = (program: anchor.Program<any>, data: any) => {
  try {
    const accountTypes = Object.keys(program.account);
    for (let index = 0; index < accountTypes.length; index++) {
      const accountType = accountTypes[index];

      try {
        const decoded = program.coder.accounts.decode(accountType, data!);
        console.log("decoded", decoded);
        return { account: decoded, accountType };
      } catch (error) {
      }
    }

    // doesn't match any idl account
    return { account: data, accountType: 'Account' };
  } catch (error) {
    console.error(error)
  }
};

export const SearchBar: FC<SearchBarProps> = ({}: SearchBarProps) => {
  const router = useRouter();
  const { programID } = useClockworks();
  const program = useCrankProgram();

  const [marketAddress, setMarketAddress] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (marketAddress.length === 0) {
      return;
    }

    // NOTE: If not deleted, extra ?address=xyz is added
    delete router.query.address;

    router.push({ pathname: `/queue/${marketAddress}`, query: router.query });
  };

  const { data, error, loading } = useAddressAll(marketAddress);
  console.log({ data, error, loading });

  // useEffect(() => {
  //   if (account) {
  //     console.log("DATA FOUND!", account);
  //     tryDecode(program, account.data);

  //     // const decoded = program.coder.accounts.decode("queue", account.data!);
  //     // console.log("decoded", decoded);
  //   }
  // }, [program, account]);

  console.log(error?.message);

  return (
    <div className="flex flex-col space-y-10 items-stretch mb-[30px] px-4">
      <form
        className="flex items-center space-x-4 rounded-lg border text-[#979797] border-[#E7EAED] dark:border-[#4F4F4F]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={marketAddress}
          onChange={(e) => setMarketAddress(e.target.value)}
          placeholder="Queue Address"
          className="px-3 py-2 w-full bg-transparent focus:outline-none text-[#979797] flex-1"
        />
        <button type="submit" className="px-4 py-2">
          <SearchIcon className="h-5 w-5 text-[#979797]" />
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};
