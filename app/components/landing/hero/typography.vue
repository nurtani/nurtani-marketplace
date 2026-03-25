<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-6 text-white">
    <h1
      class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif text-white"
    >
      {{ t("hero.content.title_top") }}<br />
      <span class="text-[#FFEEAD] italic">{{
        t("hero.content.title_bottom")
      }}</span>
    </h1>
    <p class="text-[16px] md:text-xl text-white/90 max-w-lg">
      {{ t("hero.content.description") }}
    </p>
    <div class="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
      <button
        class="bg-[#FFEEAD] text-[#1A4D2E] px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:opacity-90 transition text-sm md:text-base"
      >
        {{ t("hero.content.btn_market") }}
      </button>
      <button
        class="border border-white text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1A4D2E] transition text-sm md:text-base"
      >
        {{ t("hero.content.btn_join") }}
      </button>
    </div>
  </div>
</template>
