import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
import Custom404 from "pages/404";
import { DataTable } from "components/common/DataTable";
import { RecursiveAccountRenderer } from "components/common/AccountRenderer";
import { useAddressAll } from "hooks/useAddressAll";
import { AccountTableTitle } from "components/common/AccountTableTitle";
import { Loader } from "components/common/Loader";

const AddressPage = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading, reset } = useAddressAll(address as string);

  useEffect(() => {
    return () => reset();
  }, [reset]);

  if (loading) return <Loader />;

  if (data) {
    return (
      <div className="py-6 rounded-lg flex flex-col mb-6">
        <AccountTableTitle accountType={data.accountType} />
        <DataTable>
          <RecursiveAccountRenderer
            account={data.account || data.accountInfo}
            address={address as string}
          />
        </DataTable>
      </div>
    );
  }

  if (error && error?.message) {
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
