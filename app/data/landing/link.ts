export const getCompanyLinks = (t: (key: string) => string) => [
  { label: t("footer.companyLinks.home"), url: "/" },
  { label: t("footer.companyLinks.solutions"), url: "/solusi" },
  { label: t("footer.companyLinks.products"), url: "/produk" },
  { label: t("footer.companyLinks.gallery"), url: "/galeri" },
  { label: t("footer.companyLinks.platform"), url: "/platform" },
];

export const getPlatformLinks = (t: (key: string) => string) => [
  { label: t("footer.platformLinks.farmers"), url: "/petani" },
  { label: t("footer.platformLinks.buyers"), url: "/pembeli" },
  { label: t("footer.platformLinks.waBot"), url: "#" },
  { label: t("footer.platformLinks.webDashboard"), url: "#" },
  { label: t("footer.platformLinks.blockchain"), url: "#" },
];
