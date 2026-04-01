<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-6">
    <div class="flex items-center gap-x-2 md:gap-x-3">
      <NuxtImg
        src="/icon/nurtani.png"
        alt="NurTani Logo"
        class="w-8 h-8 md:w-9 md:h-9 object-contain"
        width="36"
        height="36"
      />
      <span class="font-bold text-white text-xl md:text-2xl tracking-wide">
        NurTani
      </span>
    </div>

    <p
      class="text-white/80 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-xs mt-1 lg:mt-2"
    >
      {{ t("footer.brand") }}
    </p>

    <div class="flex items-start gap-x-3 mt-1 md:mt-2">
      <a
        v-for="(sosmed, index) in socialMedia"
        :key="index"
        :href="sosmed.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="sosmed.name"
        class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#fde68a] flex items-center justify-center transition-colors duration-300 hover:bg-white group"
      >
        <NuxtImg
          :src="sosmed.icon"
          :alt="`${sosmed.name} Icon`"
          class="w-5 h-5 object-contain"
          width="20"
          height="20"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialMedia } from '~/data/landing/sosmed'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
