import type { ReactElement } from "react";
// import CollaborateWithSection from "./components/section/CollaborateWithSection";
// import EnsuringAuthenticationSection from "./components/section/EnsuringAuthenticationSection";
// import HowItWorksSection from "./components/section/HowItWorksSection";
import MainSection from "./components/section/MainSection";
// import UseCasesSection from "./components/section/UseCasesSection";
import type { Locale } from "./dictionaries";
import { getDictionary } from "./dictionaries";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<ReactElement> {
  const params = await props.params;
  const { lang } = params;
  const t = await getDictionary(lang);

  return (
    <div className="relative">
      <MainSection t={t} />
    </div>
  );
}
