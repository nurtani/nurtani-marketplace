<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAutoCarousel } from '~/composables/landing/useHeroCarousel'
import { farmerImages, productImages } from '~/data/landing/hero' // sesuaikan path file dummy

const { t } = useI18n()

const { currentIndex: farmerIndex } = useAutoCarousel(
  farmerImages.length,
  3000,
  0
)
const { currentIndex: productIndex } = useAutoCarousel(
  productImages.length,
  3000,
  1500
)

const activeFarmer = computed(
  () => (farmerImages[farmerIndex.value] ?? farmerImages[0])!
)
</script>

<template>
  <div class="relative w-full">
    <div class="grid grid-cols-2 gap-x-3 md:gap-x-8 items-start w-full">
      <div class="flex flex-col gap-y-2 md:gap-y-4 mt-8">
        <div
          class="h-[350px] grid rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group aspect-[3/4]"
        >
          <NuxtImg
            v-for="(img, i) in farmerImages"
            :key="img.src"
            :aria-hidden="i !== farmerIndex"
            :src="img.src"
            :alt="img.alt"
            class="col-start-1 row-start-1 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            :class="
              i === farmerIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            "
            format="webp"
            fit="cover"
            preload
          />
          <div
            aria-live="polite"
            class="col-start-1 row-start-1 flex flex-col justify-end w-full px-3 md:px-6 pb-4 md:pb-22 text-start text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-10"
          >
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              {{ activeFarmer.name }} –
            </p>
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              {{ activeFarmer.role }}
            </p>
          </div>
        </div>

        <div
          class="rounded-2xl md:rounded-3xl py-20 px-5 bg-white/12 backdrop-blur-sm text-center border border-white/10 shadow-lg"
        >
          <h3
            class="text-[28px] md:text-[48px] font-extrabold text-white leading-tight"
          >
            {{ t("hero.visual.stats_number") }}
          </h3>
          <p class="text-[12px] md:text-[16px] text-white font-semibold mt-1">
            {{ t("hero.visual.stats_label") }}
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-y-2 md:gap-y-4 mb-8">
        <div
          class="bg-[#F3F4F6]/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl flex flex-col gap-y-2 text-[#1A4D2E]"
        >
          <div class="w-10 h-10 flex items-center justify-start">
            <NuxtImg
              src="/icon/leaf.png"
              alt="leaf"
              class="w-auto h-auto max-h-full"
            />
          </div>
          <h4 class="text-[20px] font-extrabold leading-tight">
            {{ t("hero.visual.feature_title") }}
          </h4>
          <p class="text-[14px] text-[#6B7280] font-medium leading-relaxed">
            {{ t("hero.visual.feature_desc") }}
          </p>
        </div>

        <!-- Product Carousel -->
        <div
          class="relative h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/10 group"
        >
          <NuxtImg
            v-for="(img, i) in productImages"
            :key="img.src"
            :aria-hidden="i !== productIndex"
            :src="img.src"
            :alt="img.alt"
            class="absolute inset-0 w-full h-full object-cover aspect-[4/5] transition-all duration-700 group-hover:scale-105"
            :class="
              i === productIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            "
            format="webp"
            fit="cover"
            preload
          />
        </div>
      </div>
    </div>
  </div>
</template>
