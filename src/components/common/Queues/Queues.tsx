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
      <div className="bg-cyan-800 hover:bg-cyan-600 transition-colors py-2 px-4 rounded flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-xs text-cyan-400">Name</h3>
          <p className="font-medium text-sm ">{queue.account.name}</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xs text-cyan-400">Address</h3>
          <p className="font-medium text-sm ">{queue.publicKey.toString()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4 items-stretch">
      <div className="flex flex-col space-y-2">
        <div className="bg-cyan-700 p-4 rounded flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold">Queues</h2>

          {loading ? (
            <div className="flex flex-col space-y-2">
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
                placeholder="Search by name or address"
                className="w-full p-2 rounded border border-cyan-300 bg-transparent focus:outline-none text-sm"
              />
              <ul className="flex flex-col space-y-3 w-full">
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
                <p className="text-medium">{`${pageNumber}/${totalPages}`}</p>
                <PaginationButton type="next" onClick={nextPage} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
