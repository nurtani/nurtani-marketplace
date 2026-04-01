<template>
  <div
    class="w-full border-t border-white/20 pt-6 md:pt-8 mt-10 md:mt-16 flex justify-center text-center px-4"
  >
    <p class="text-white/80 text-xs md:text-sm leading-relaxed">
      © {{ currentYear }} {{ t("footer.copyright1") }}
      <span class="text-red-500">❤️</span> {{ t("footer.copyright2") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>
