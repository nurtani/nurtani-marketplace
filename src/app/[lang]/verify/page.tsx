import type { ReactElement } from "react";
import VerifyHeader from "./components/VerifyHeader";
import VerifyStatusGuidelines from "./components/VerifyStatusGuidelines";
import VerifyTab from "./components/VerifyTab";
import type { Locale } from "../dictionaries";
import { getDictionary } from "../dictionaries";

export default async function Verify(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<ReactElement> {
  const params = await props.params;
  const { lang } = params;
  const t = await getDictionary(lang);

  return (
    <div className="relative">
      <div className="flex flex-col pt-24 pb-12 lg:pt-32 lg:pb-20 gap-y-12">
        <VerifyHeader t={t} />
        <div className="flex flex-col gap-y-6 lg:grid grid-cols-3 container mx-auto px-6 sm:px-8 gap-x-8">
          <div className="col-span-2">
            <VerifyTab t={t} />
          </div>
          <div className="col-span-1">
            <VerifyStatusGuidelines t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}
