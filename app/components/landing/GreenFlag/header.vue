<template>
  <div class="text-center mb-10 w-full">
    <div class="flex items-center justify-center gap-3 mb-4">
      <NuxtImg
        src="/icon/wheat1.png"
        alt="Icon Wheat Left"
        class="w-auto h-auto"
      />
      <span class="text-sm font-bold tracking-[0.7px] text-white uppercase">{{
        t("green.header.title_top")
      }}</span>
      <NuxtImg
        src="/icon/wheat2.png"
        alt="Icon Wheat Right"
        class="w-auto h-auto"
      />
    </div>
    <div class="text-center w-full">
      <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
        {{ t("green.header.title_bottom") }}
      </h2>

      <p class="text-white text-base md:text-lg max-w-sm md:max-w-3xl mx-auto">
        {{ t("green.header.description") }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
