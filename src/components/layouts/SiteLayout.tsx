import { SearchIcon } from "@heroicons/react/outline";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, FormEvent, ReactNode, useState } from "react";
import Header from "../common/Header";
import { ProgramSelector } from "components/common/ProgramSelector";
import { Footer } from "components/common/Footer/Footer";

type SiteLayoutProps = {
  title?: string;
  children: ReactNode;
};

export const SiteLayout: FC<SiteLayoutProps> = ({
  title,
  children,
}: SiteLayoutProps) => {
  const router = useRouter();

  const [marketAddress, setMarketAddress] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // NOTE: If not deleted, extra ?address=xyz is added
    delete router.query.address;

    router.push({ pathname: `/queue/${marketAddress}`, query: router.query });
  };
  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Clockwork Explorer` : `Clockwork Explorer`}
        </title>
      </Head>
      <div className="w-full h-screen overflow-y-auto flex flex-col space-y-4 justify-between">
        <div className="w-full mx-auto">
          <Header />
          <div className="max-w-4xl w-full mx-auto">
            <div className="flex flex-col space-y-10 items-stretch mb-[30px] px-4">
              <ProgramSelector />
              <form
                className="flex items-center space-x-4 rounded-lg border text-[#979797] border-[#E7EAED]"
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
            </div>
            <div className="px-4">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export const getLayout = (page: React.ReactNode, title?: string) => (
  <SiteLayout title={title}>{page}</SiteLayout>
);
