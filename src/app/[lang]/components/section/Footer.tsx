"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { LuInstagram } from "react-icons/lu";
import Images from "@/constants/images";
import type { INavigationData } from "@/types";
import type { IDictionaries } from "@/types/dictionaries";

const smoothScrollTo = (id: string): void => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Footer = ({ t }: { t: IDictionaries }): ReactElement => {
  const navigation: INavigationData[] = [
    { name: t.navigation.home, href: "home", isInLanding: true },
    { name: t.navigation.howItWorks, href: "how-it-works", isInLanding: true },
    { name: t.navigation.features, href: "features", isInLanding: true },
    { name: t.navigation.products, href: "products", isInLanding: false },
    {
      name: t.navigation.joinWaitingList,
      href: "https://creator.kraflab.id",
      isInLanding: false,
    },
    { name: t.navigation.faq, href: "faq", isInLanding: false },
  ];

  const navigation2: INavigationData[] = [
    { name: t.navigation.tnc, href: "tnc", isInLanding: true },
    {
      name: t.navigation.privacyPolicy,
      href: "privacy-policy",
      isInLanding: true,
    },
    {
      name: t.navigation.refundPolicy,
      href: "refund-policy",
      isInLanding: true,
    },
    {
      name: t.navigation.guide,
      href: "guide",
      isInLanding: true,
    },
  ];
  return (
    <div className="bg-white relative">
      <div className="bg-white w-full h-20 blur-xl absolute"></div>
      <footer className=" text-gray-300 relative overflow-hidden z-10">
        <div className="absolute -bottom-40 -right-40 xl:top-1/3 xl:right-[-10%] w-[500px] h-[500px] bg-kraflab-teal/25 rounded-full blur-3xl z-10"></div>
        <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-kraflab-blue/25 rounded-full blur-3xl z-10"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                {/* Logo Placeholder */}
                <Image
                  alt={t.head.title}
                  src={Images.logo}
                  className="h-8 w-auto"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                {t.footer.desc}
              </p>
              {/* Social Media Icons ---> leave this commented */}
              {/* <div className="flex space-x-3">
              <div className="p-2 bg-gray-700 hover:bg-blue-600 hover:cursor-pointer rounded-full flex items-center justify-center cursor-pointer transition-colors">
                <LuLinkedin className="w-4 h-4 hover:cursor-pointer" />
              </div>
            </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-700 font-semibold mb-4">
                {t.footer.quickLinks}
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) =>
                  item.isInLanding ? (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={`/#${item.href}`}
                        onClick={() => {
                          smoothScrollTo(item.href);
                        }}
                        className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal & Support */}
            <div>
              <h3 className="text-gray-700 font-semibold mb-4">
                {t.footer.legalSupport}
              </h3>
              <ul className="space-y-3">
                {navigation2.map((item) =>
                  item.isInLanding ? (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={`/${item.href}`}
                        onClick={() => {
                          smoothScrollTo(item.href);
                        }}
                        className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-300 pt-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium text-sm">
                    {t.footer.address}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/vLcURUeizuhBu2Rz8"
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    Bali Arum Green Village
                    <br />
                    Jalan Raya Kerobokan No. 777
                    <br />
                    Badung - Bali
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium text-sm">
                    {t.footer.email}
                  </p>
                  <Link
                    href="mailto:support@baliola.io"
                    className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                  >
                    support@baliola.io
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium text-sm">
                    {t.footer.phone}
                  </p>
                  <Link
                    href="tel:+6281574536210"
                    className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                  >
                    +62 815-7453-6210
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <LuInstagram className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 font-medium text-sm">
                    {t.footer.instagram}
                  </p>
                  <Link
                    href="https://www.instagram.com/kraflab.id/"
                    className="text-gray-600 hover:text-blue-400 transition-colors text-sm"
                    target="_blank"
                  >
                    @kraflab.id
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-300 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Kraflab.id. {t.footer.copyRight}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{t.footer.madeWithLove}</span>
                <span>•</span>
                <span>{t.footer.version} 1.0</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Image
        src={Images.kraflab1}
        alt="Kraflab Logo"
        width={500}
        height={400}
        className="max-w-[220px] md:max-w-[400px] xl:max-w-[600px] xl:w-full xl:h-full h-[300px] w-[1000px] hidden md:block absolute opacity-30 xl:bottom-0 top-0 right-0 "
        priority
      />
    </div>
  );
};

export default Footer;
