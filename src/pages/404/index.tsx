import { useTheme } from "next-themes";
import { PrimaryButton } from "components/common/Button";
import { Vector404 } from "components/common/Vectors/Vector404";
import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function Custom404({ title }) {
  const { theme } = useTheme();
  const router = useRouter();

  const routeToIndex = async (e: FormEvent) => {
    e.preventDefault();

    // NOTE: If not deleted, extra ?address=xyz is added
    delete router.query.address;

    router.push({ pathname: `/`, query: router.query });
  };

  return (
    <div className="flex items-center">
      <div className="ml-[-80px]">
        <Vector404 />
      </div>

      <div className="flex-1 items-center pl-10">
        <h2 className="text-[40px] font-[600] mb-5">{title || 'Page not found!'}</h2>
        <p className="mb-5">{`Sorry, we couldn't find the page you're looking for.`}</p>
        <PrimaryButton onClick={routeToIndex}>Go back home</PrimaryButton>
      </div>
    </div>
  );
}
