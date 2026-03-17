<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

defineProps({
  isMobile: { type: Boolean, default: false },
});
</script>

<template>
  <nav
    :class="
      isMobile
        ? 'flex flex-col gap-6 font-semibold text-lg'
        : 'hidden md:flex gap-8 font-medium'
    "
  >
    <NuxtLink :to="localePath('/')">{{ t("nav.home") }}</NuxtLink>
    <NuxtLink :to="localePath('/solusi')">{{ t("nav.solution") }}</NuxtLink>
    <NuxtLink :to="localePath('/produk')">{{ t("nav.product") }}</NuxtLink>
    <NuxtLink :to="localePath('/galeri')">{{ t("nav.gallery") }}</NuxtLink>
    <NuxtLink :to="localePath('/platform')">{{ t("nav.platform") }}</NuxtLink>
  </nav>
</template>
