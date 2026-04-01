<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ReadyCardProps } from '~/../../types/landing/ready'
import { readyData } from '~/data/landing/ready'

const { locale } = useI18n()
const props = defineProps<ReadyCardProps>()

const cardData = computed(() => {
  const currentData
    = readyData[locale.value as keyof typeof readyData] || readyData.id

  return {
    bgImage: props.bgImage ?? currentData.bgImage,
    icon: props.icon ?? currentData.icon,
    title: props.title ?? currentData.title,
    description: props.description ?? currentData.description,
    primaryCtaText: props.primaryCtaText ?? currentData.primaryCtaText,
    primaryCtaUrl: props.primaryCtaUrl ?? currentData.primaryCtaUrl,
    secondaryCtaText: props.secondaryCtaText ?? currentData.secondaryCtaText,
    secondaryCtaUrl: props.secondaryCtaUrl ?? currentData.secondaryCtaUrl
  }
})
</script>

<template>
  <div
    class="relative w-full max-w-[1000px] xl:max-w-[1392px] md:min-h-[308px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl group flex flex-col justify-center items-center px-5 md:px-[92px] py-6 md:py-0 text-center"
  >
    <NuxtImg
      :src="cardData.bgImage"
      alt="Latar Belakang CTA"
      class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
      format="webp"
      loading="lazy"
    />

    <div
      class="absolute inset-0 z-10"
      style="
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.75) 0%,
          rgba(0, 0, 0, 0.53) 25%,
          rgba(0, 0, 0, 0.45) 50%,
          rgba(0, 0, 0, 0.5) 75%,
          rgba(0, 0, 0, 0.75) 100%
        );
      "
    />

    <div class="relative z-20 flex flex-col items-center gap-4 md:gap-5 w-full">
      <NuxtImg
        :src="cardData.icon"
        alt="Ikon Tanaman"
        class="w-10 h-10 md:w-12 md:h-12 object-contain"
        format="webp"
        loading="lazy"
      />

      <div class="flex flex-col gap-y-1.5 md:gap-y-2">
        <h2 class="text-white font-bold text-2xl md:text-3xl leading-tight">
          {{ cardData.title }}
        </h2>
        <p
          class="text-white/90 text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-xl mx-auto"
        >
          {{ cardData.description }}
        </p>
      </div>

      <div
        class="flex flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-5 mt-1"
      >
        <NuxtLink
          :to="cardData.primaryCtaUrl"
          class="group/btn w-full md:w-auto inline-flex justify-center items-center gap-x-2 px-6 py-3 bg-[#1F4D33] text-white font-semibold text-sm md:text-base rounded-[12px] transition-all duration-300 hover:bg-[#1a3d28] hover:-translate-y-0.5 shadow-md"
        >
          {{ cardData.primaryCtaText }}
          <svg
            class="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </NuxtLink>

        <NuxtLink
          :to="cardData.secondaryCtaUrl"
          class="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 bg-transparent border-[1.5px] border-white/80 text-white font-semibold text-sm md:text-base rounded-[12px] transition-all duration-300 hover:bg-white/10 hover:border-white shadow-sm"
        >
          {{ cardData.secondaryCtaText }}
        </NuxtLink>
      </div>

      <p class="text-white/80 text-xs md:text-sm font-medium mt-0.5">
        Gratis untuk selamanya
      </p>
    </div>
  </div>
</template>
