"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import React from "react";
import Images from "@/constants/images";
import type { IDictionaries } from "@/types/dictionaries";

const smoothScrollTo = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const MainSection = ({ t }: { t: IDictionaries }): ReactElement => {
  return (
    <section
      className="pt-32 pb-20 md:pt-32 md:pb-20 relative overflow-hidden"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] xl:bg-kraflab-blue/30 bg-kraflab-teal/15 rounded-full blur-3xl -z-10"></div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 min-h-[450px]">
              {/* Left: Text & CTA */}
              <div className="flex-1 w-full md:w-1/2 flex flex-col xl:justify-start xl:items-start justify-center items-center h-full xl:pl-10 py-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl leading-tight text-balance text-center md:text-left">
                  {t.hero.title}{" "}
                  <span className="text-gradient">{t.hero.blockchain}</span>
                </h1>
                <p className="md:text-md text-gray-600 max-w-xl mb-8 text-center md:text-left">
                  {t.hero.subtitle}
                </p>
                <div className="flex flex-row sm:gap-4 gap-2 mb-10">
                  <Link
                    href="https://creator.kraflab.id"
                    className="bg-gradient-to-r from-primary to-kraflab-teal/70 rounded-md text-white hover:bg-transparent/80 flex items-center justify-center gap-2 xl:px-10 text-sm xl:text-base px-6 py-3 duration-300 transition-all"
                  >
                    {t.hero.joinWaitingList}
                  </Link>
                  <a
                    onClick={() => smoothScrollTo("how-it-works")}
                    className="xl:px-10 text-sm xl:text-base hover:cursor-pointer text-kraflab-blue hover:text-kraflab-blue/70 flex items-center justify-center gap-2 px-6 py-3"
                  >
                    {t.hero.howItWorks}
                  </a>
                </div>
              </div>
              {/* Right: Kraflab Logo */}
              <div className="flex-1 w-full md:w-1/2 hidden md:flex justify-center items-center xl:mb-10 md:mb-0 relative min-h-[320px]">
                <div className="absolute self-center w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-kraflab-teal/15 rounded-full blur-3xl -z-10"></div>
                <Image
                  src={Images.kraflab}
                  alt="Kraflab Logo"
                  width={500}
                  height={400}
                  className="xl:w-full xl:h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default MainSection;
