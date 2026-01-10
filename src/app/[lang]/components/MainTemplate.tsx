"use client";

import React from "react";
import type { ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar/Navbar";
import { useCentralStore } from "@/store";
import type { IDictionaries } from "@/types/dictionaries";
import Footer from "./section/Footer";
import type { Locale } from "../dictionaries";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "@radix-ui/themes";

const MainTemplate = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale; className: string; t: IDictionaries };
}>): ReactNode => {
  const { isDarkMode } = useCentralStore();

  return (
    <html lang={params.lang} className="w-full overflow-x-hidden">
      <head>
        <title>{params.t.head.title}</title>
        <meta name="description" content={params.t.head.description} />
      </head>
      <body
        className={`${params.className} overflow-x-hidden scroll-smooth relative`}
      >
        <Theme>
          <Navbar t={params.t} />
          {children}
          <Footer t={params.t} />
        </Theme>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={isDarkMode ? "dark" : "light"}
          transition={Bounce}
        />
      </body>
    </html>
  );
};

export default MainTemplate;
