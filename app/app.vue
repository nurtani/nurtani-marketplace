<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'NurTani'
const description
  = 'NurTani menjaga keaslian proses produksi sampai konsumsi secara terbuka agar alam kita tetap terjaga.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/assets/picture/preview-nurtani.png',
  twitterImage: '/assets/picture/preview-nurtani.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
