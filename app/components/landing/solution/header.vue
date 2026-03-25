<template>
  <div class="text-center mb-10">
    <div class="flex items-center justify-center gap-3 mb-4">
      <NuxtImg
        src="/icon/wheat1.png"
        alt="Icon Wheat Left"
        class="w-auto h-auto"
      />
      <span
        class="text-sm font-bold tracking-[0.7px] text-[#1A4D2E] uppercase"
        >{{ t("solution.title_top") }}</span
      >
      <NuxtImg
        src="/icon/wheat2.png"
        alt="Icon Wheat Right"
        class="w-auto h-auto"
      />
    </div>
    <h2 class="text-3xl md:text-4xl font-extrabold text-[#1A4D2E] mb-4">
      {{ t("solution.title_bottom") }}
    </h2>
    <p class="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
      {{ t("solution.description") }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
