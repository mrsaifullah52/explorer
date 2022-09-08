import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useQueues } from "hooks/useQueues";
import { SkeletonBox } from "../Skeleton";
import { usePagination } from "hooks/usePagination";
import { useRouter } from "next/router";
import { PaginationButton } from "../Pagination/PaginationButton";

export const Queues = () => {
  const router = useRouter();
  const { data, error, loading } = useQueues();

  const [filterString, setFilterString] = useState("");

  const {
    pageData: pageMarkets,
    totalPages,
    pageNumber,
    prevPage,
    nextPage,
  } = usePagination(data, 5, filterString);

  const QueueListItem = ({ queue }: { queue: any }) => {
    return (
      <div className="hover:bg-[#E7EAED] transition-colors py-2 px-4 rounded-lg flex items-center justify-between border border-[#D7DCE1]">
        <div className="flex flex-col border-r pr-4 w-60">
          <h3 className="text-xs text-[#979797]">Name</h3>
          <p className="font-normal leading-relaxed text-sm text-[#0E1114]">{queue.account.name}</p>
        </div>

        <div className="flex-1 pl-4 flex-col">
          <h3 className="text-xs text-[#979797]">Address</h3>
          <p className="font-normal leading-relaxed text-sm text-[#0E1114]">{queue.publicKey.toString()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4 items-stretch">
      <div className="flex flex-col">
        <div className="bg-[#F8F9F9] p-4 rounded-lg flex flex-col space-y-5">
          <h2 className="text-2xl text-[#0E1114] font-semibold">Queues</h2>

          {loading ? (
            <div className="flex flex-col space-y-4">
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox />
            </div>
          ) : (
            <>
              <input
                type="text"
                value={filterString}
                onChange={(e) => setFilterString(e.target.value)}
                placeholder="Filter by name or address"
                className="w-full p-2 rounded-lg border border-[#D7DCE1] bg-transparent focus:outline-none text-sm text-[#979797]"
              />
              <ul className="flex flex-col space-y-5 w-full">
                {pageMarkets.map((queue) => (
                  <li
                    key={queue.publicKey.toString()}
                    className="cursor-pointer w-full"
                  >
                    <Link
                      passHref
                      href={{
                        pathname: `/queue/${queue.publicKey.toString()}`,
                        query: router.query,
                      }}
                    >
                      <a>
                        <QueueListItem queue={queue} />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <PaginationButton type="prev" onClick={prevPage} />
                <p className="text-sm text-[#979797]">{`${pageNumber} of ${totalPages}`}</p>
                <PaginationButton type="next" onClick={nextPage} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
