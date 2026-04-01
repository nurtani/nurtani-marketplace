<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()

defineProps({
  isMobile: { type: Boolean, default: false }
})
</script>

<template>
  <nav
    :class="
      isMobile
        ? 'flex flex-col gap-6 font-semibold text-lg'
        : 'hidden md:flex gap-8 font-medium'
    "
  >
    <NuxtLink :to="localePath({ path: '/', hash: '#home' })">
      {{ t("nav.home") }}
    </NuxtLink>

    <NuxtLink :to="localePath({ path: '/', hash: '#solusi' })">
      {{ t("nav.solution") }}
    </NuxtLink>

    <NuxtLink :to="localePath({ path: '/', hash: '#produk' })">
      {{ t("nav.product") }}
    </NuxtLink>

    <NuxtLink :to="localePath({ path: '/', hash: '#galeri' })">
      {{ t("nav.gallery") }}
    </NuxtLink>

    <NuxtLink :to="localePath({ path: '/', hash: '#platform' })">
      {{ t("nav.platform") }}
    </NuxtLink>
  </nav>
</template>
