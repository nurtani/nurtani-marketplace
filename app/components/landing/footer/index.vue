<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { getCompanyLinks, getPlatformLinks } from "~/data/landing/link";

const { t } = useI18n();

// Gunakan computed untuk mengaktifkan reaktivitas i18n
const companyLinks = computed(() => getCompanyLinks(t));
const platformLinks = computed(() => getPlatformLinks(t));
</script>

<template>
  <footer class="w-full bg-[#1A4D2E]">
    <div
      class="mx-auto max-w-screen-xl px-6 md:px-12 py-8 md:py-12 flex flex-col gap-8 md:gap-12"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
      >
        <LandingFooterBrand />

        <LandingFooterLinks title="Perusahaan" :links="companyLinks" />

        <LandingFooterLinks title="Platform" :links="platformLinks" />

        <LandingFooterContact />
      </div>

      <LandingFooterCopyright />
    </div>
  </footer>
</template>
