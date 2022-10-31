import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
// import { useQueue } from "hooks/useQueue";
import { Queue } from "components/common/Queue";
import { useAddress } from "hooks/useAddress";
import Custom404 from "pages/404";
import { DataTable, DataTableRow } from "components/common/DataTable";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useSolana } from "contexts/SolanaContext";
import { getExplorerAccountLink } from "utils/general";

const AddressPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading, reset } = useAddress(address as string);
  const { cluster } = useSolana();

  useEffect(() => {
    return () => reset();
  }, [reset]);

  if (loading) return <p>loading...</p>;

  if (data) {
    return (
      <div className="flex flex-col">
        <div className="py-6 rounded-lg flex flex-col space-y-6">
          <h2 className="text-2xl text-[#0E1114] dark:text-white font-semibold font-header leading-5">
            Account
          </h2>

          <DataTable>
            <DataTableRow label="Address" value={address as string} />
            <DataTableRow
              label="Balance (SOL)"
              value={(data.lamports / LAMPORTS_PER_SOL).toString()}
            />
            <DataTableRow
              label="Allocated Data Size"
              value={`${data.data.length} byte(s)`}
            />
            <DataTableRow
              label="Assigned Program Id"
              value={data.owner.toBase58()}
              link={getExplorerAccountLink(data.owner, cluster.network)}
            />
            <DataTableRow
              label="Executable"
              value={data.executable ? "Yes" : "No"}
            />
          </DataTable>
        </div>
      </div>
    );
  }

  if (error && error?.message) {
    console.log("error.message", error?.message);
    const missingQueueRegExp = new RegExp("Account does not exist", "i");
    if (error.message.match(missingQueueRegExp)) {
      return <Custom404 title={"Address not found!"} />;
    }
    const invalidPublicKeyRegExp = new RegExp("Invalid address.", "i");
    if (error.message.match(invalidPublicKeyRegExp)) {
      return <Custom404 title={"Invalid address."} />;
    }
    const accountNotFoundRegExp = new RegExp("Account not found.", "i");
    if (error.message.match(accountNotFoundRegExp)) {
      return <Custom404 title={"Account not found."} />;
    }
    return <Custom404 title={"Unexpected error."} />;
  }

  return null;
};

AddressPage.getLayout = (page: ReactNode) => getLayout(page, "Address");

export default AddressPage;
