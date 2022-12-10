import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import { getLayout } from "../../components/layouts/SiteLayout";
import Custom404 from "pages/404";
import { DataTable } from "components/common/DataTable";
import { RecursiveAccountRenderer } from "components/common/AccountRenderer";
import { useAddressAll } from "hooks/useAddressAll";
import { useAddressSignatures } from "hooks/useAddressSignatures";

import { AccountTableTitle } from "components/common/AccountTableTitle";
import { Loader } from "components/common/Loader";

// Write a function to use the getSignaturesForAddress RPC endpoint to display a table of the recent transactions an account has been included in. This table should be displayed on all account templates in the /address/* path. https://docs.solana.com/developing/clients/jsonrpc-api#getsignaturesforaddress

export const AddressSignaturesTable = () => {
  const router = useRouter();
  const { address } = router.query;
  const { data, error, loading, reset } = useAddressSignatures(
    address as string
  );

  console.log("data", data);
  return (
    <div className="py-6 rounded-lg flex flex-col mb-6">
      <AccountTableTitle accountType={"Transaction History"} />
      <DataTable>
        <div className="flex">
          <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Signature
          </div>
          <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Block
          </div>
          <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Age
          </div>
          <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Timestamp
          </div>
          <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Result
          </div>
        </div>
        {data?.map((signature) => {
          return (
            <div className="" key={signature.signature}>
              <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {signature.signature}
              </div>
            </div>
          );
        })}

        {data && data.length === 0 && (
          <div className="flex self-center items-center w-full justify-center px-6 py-4">
            <span className="whitespace-nowrap text-sm text-gray-500 text-center justify-self-center">
              No transactions found
            </span>
          </div>
        )}
      </DataTable>
    </div>
  );
};

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
      <>
        <div className="py-6 rounded-lg flex flex-col mb-6">
          <AccountTableTitle accountType={data.accountType} />
          <DataTable>
            <RecursiveAccountRenderer
              account={data.account || data.accountInfo}
              address={address as string}
            />
          </DataTable>
        </div>
        <AddressSignaturesTable />
      </>
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
