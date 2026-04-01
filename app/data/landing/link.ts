export const getCompanyLinks = (t: (key: string) => string) => [
  { label: t('footer.link.companyLinks.home'), url: '/#home' },
  { label: t('footer.link.companyLinks.solutions'), url: '/#solusi' },
  { label: t('footer.link.companyLinks.products'), url: '/#produk' },
  { label: t('footer.link.companyLinks.gallery'), url: '/#galeri' },
  { label: t('footer.link.companyLinks.platform'), url: '/#platform' }
]

export const getPlatformLinks = (t: (key: string) => string) => [
  { label: t('footer.link.platformLinks.farmers'), url: '/petani' },
  { label: t('footer.link.platformLinks.buyers'), url: '/pembeli' },
  { label: t('footer.link.platformLinks.waBot'), url: '#' },
  { label: t('footer.link.platformLinks.webDashboard'), url: '#' },
  { label: t('footer.link.platformLinks.blockchain'), url: '#' }
]
