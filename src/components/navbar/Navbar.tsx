"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { setCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import type { ReactElement } from "react";
import React, { Fragment, useState } from "react";
import Images from "@/constants/images";
import type { INavigationData } from "@/types";
import type { IDictionaries } from "@/types/dictionaries";

const smoothScrollTo = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = ({ t }: { t: IDictionaries }): ReactElement => {
  const navigation: INavigationData[] = [
    { name: t.navigation.home, href: "home", isInLanding: true },
    { name: t.navigation.howItWorks, href: "how-it-works", isInLanding: true },
    { name: t.navigation.features, href: "features", isInLanding: true },
    { name: t.navigation.products, href: "/products", isInLanding: false },
    // { name: t.navigation.verify, href: "/verify", isInLanding: false }
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const params = useParams();
  const pathname = usePathname();

  const activeLocale = params.lang || "en";

  const changeLocale = (locale: string): void => {
    const newPathname = `/${locale}${pathname.substring(3)}`;
    setCookie("locale", locale);
    window.location.href = newPathname;
  };

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm border border-white/30">
      <nav
        aria-label="Global"
        className="mx-auto max-w-7xl items-center justify-between p-6 xl:px-8 flex"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">{t.head.title}</span>
          <Image
            alt={t.head.title}
            src={Images.logo}
            className="h-8 w-auto"
            width={200}
            height={200}
          />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">{t.head.title}</span>
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="size-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) =>
            item.isInLanding ? (
              <Link
                key={item.name}
                href={`/#${item.href}`}
                onClick={() => smoothScrollTo(item.href)}
                className="text-sm/6 text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md hover:cursor-pointer transition-all duration-300"
              >
                {item.name}
              </Link>
            )
          )}

          <div className="flex space-x-2 items-center text-sm/6 ">
            <button
              onClick={() => changeLocale("en")}
              className={`${
                activeLocale === "en"
                  ? "bg-gradient-to-r from-primary/95 to-kraflab-teal/35 text-white px-4 py-2 rounded-md"
                  : ""
              } text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md transition-all duration-300`}
            >
              EN
            </button>
            <span className="text-primary">|</span>
            <button
              onClick={() => changeLocale("id")}
              className={`${
                activeLocale === "id"
                  ? "bg-gradient-to-r from-primary/95 to-kraflab-teal/35 text-white px-4 py-2 rounded-md"
                  : ""
              } text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md transition-all duration-300`}
            >
              ID
            </button>
          </div>

          <div>
            <Link
              href={"https://creator.kraflab.id"}
              target="_blank"
              className="bg-gradient-to-r from-primary to-kraflab-teal/70 rounded-md text-white hover:bg-transparent/80 flex items-center justify-center gap-2 xl:px-10 text-sm xl:text-base px-5 py-2 duration-300 transition-all"
            >
              {t.hero.joinWaitingList}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
          as="div"
        >
          <div className="fixed inset-0 z-10" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-[60] w-full h-full overflow-y-hidden bg-white/30 backdrop-blur-lg shadow-lg border-l border-white/30 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col gap-y-10">
              <div className="items-center justify-between flex lg:hidden">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">{t.head.title}</span>
                  <Image
                    alt={t.head.title}
                    src={Images.logo}
                    className="h-8 w-auto"
                    width={200}
                    height={200}
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="h-full">
                <div className="h-full flex flex-col gap-y-6">
                  <div className="space-y-2">
                    {navigation.map((item) =>
                      item.isInLanding ? (
                        <Link
                          key={item.name}
                          href={`/#${item.href}`}
                          onClick={() => {
                            smoothScrollTo(item.href);
                            setMobileMenuOpen(false);
                          }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gradient-to-r from-primary to-kraflab-teal/70  hover:text-white transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gradient-to-r from-primary to-kraflab-teal/70  hover:text-white transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                  <div className="flex space-x-2 items-center">
                    <button
                      onClick={() => changeLocale("en")}
                      className={`${
                        activeLocale === "en"
                          ? "bg-gradient-to-r from-primary/95 to-kraflab-teal/35 text-white px-4 py-2 rounded-md"
                          : ""
                      } text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md transition-all duration-300`}
                    >
                      EN
                    </button>
                    <span className="text-primary">|</span>
                    <button
                      onClick={() => changeLocale("id")}
                      className={`${
                        activeLocale === "id"
                          ? "bg-gradient-to-r from-primary/95 to-kraflab-teal/35 text-white px-4 py-2 rounded-md"
                          : ""
                      } text-primary hover:bg-gradient-to-r from-primary/95 to-kraflab-teal/35 hover:text-white px-4 py-2 rounded-md transition-all duration-300`}
                    >
                      ID
                    </button>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={"https://creator.kraflab.id"}
                      target="_blank"
                      className="bg-gradient-to-r from-primary to-kraflab-teal/70 rounded-md text-white hover:bg-transparent/80 flex items-center justify-center gap-2 xl:px-10 text-sm xl:text-base px-5 py-2 transition-all duration-300"
                    >
                      {t.hero.joinWaitingList}
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;
