<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center text-center gap-3 sm:gap-4 text-white">
    <div class="flex items-center gap-3">
      <NuxtImg
        src="/icon/wheat1.png"
        alt="Icon Wheat Left"
        class="w-auto h-auto"
      />
      <span class="font-bold text-sm tracking-[0.7px] uppercase">{{
        t("challenge.header.title_top")
      }}</span>
      <NuxtImg
        src="/icon/wheat2.png"
        alt="Icon Wheat Right"
        class="w-auto h-auto"
      />
    </div>
    <h2 class="font-bold text-[28px]">
      {{ t("challenge.header.title_bottom") }}
    </h2>
    <p class="text-base font-light">{{ t("challenge.header.description") }}</p>
  </div>
</template>
