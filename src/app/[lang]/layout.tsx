import { Montserrat } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import MainTemplate from "./components/MainTemplate";
import type { Locale } from "./dictionaries";
import { getDictionary } from "./dictionaries";
import "../globals.css";
import "@radix-ui/themes/styles.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>; // ✅ runtime-accurate
}): Promise<ReactElement> {
  // ✅ Correct way in Next 16 (NO React.use here)
  const { lang } = await params;
  const locale = lang as Locale;

  const t = await getDictionary(locale);

  return (
    <MainTemplate
      params={{
        t,
        className: montserrat.className,
        lang: locale,
      }}
    >
      {children}
    </MainTemplate>
  );
}
