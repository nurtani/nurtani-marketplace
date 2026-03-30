<template>
  <div
    class="flex flex-col gap-[10px] rounded-[10px] p-4 bg-[#F4F5F7] text-[14px] m-4"
  >
    <div class="flex items-center justify-between">
      <span class="text-[#4A5565] leading-5">{{
        t("platform.card.dashboard.content.total")
      }}</span>
      <span class="text-[#4A5565] text-base leading-6">24</span>
    </div>

    <div class="flex items-center justify-between">
      <span class="text-[#4A5565] font-bold leading-5">{{
        t("platform.card.dashboard.content.sales")
      }}</span>
      <span class="text-[#4A5565] text-base leading-6">Rp 4,5 Jt</span>
    </div>

    <div class="flex items-center justify-between">
      <span class="text-[#4A5565] leading-5">{{
        t("platform.card.dashboard.content.rating")
      }}</span>
      <div class="flex items-center gap-1 text-lg font-medium text-[#F0B100]">
        <span>4.8</span>
        <span class="text-[#F0B100] drop-shadow-sm">⭐</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
