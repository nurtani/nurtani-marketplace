<template ref="carouselRef">
  <section
    class="relative w-full min-h-screen py-16 md:py-24 overflow-hidden font-sans flex flex-col items-center justify-center"
    style="background: linear-gradient(to right, #1a4d2e 0%, #008236 100%)"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none bg-repeat-x bg-bottom"
      style="
        background-image: url(&quot;/assets/backgrounds/gallery.png&quot;);

        background-size: auto 300px;
      "
    />

    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center"
    >
      <LandingGalleryHeader />
    </div>

    <div class="relative z-10 w-full mt-4 mb-8">
      <button
        class="flex absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all text-[#1a4d2e]"
        aria-label="Previous Slide"
        @click="slidePrev"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref="carouselRef"
        class="w-full flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar px-4 md:px-16 lg:px-24"
        @scroll="handleScroll"
      >
        <div
          v-for="item in galleryData"
          :key="item.id"
          class="snap-center shrink-0 w-[280px] md:w-[320px]"
        >
          <LandingGalleryCard :gallery="item" />
        </div>
      </div>

      <button
        class="flex absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 md:bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all text-[#1a4d2e]"
        aria-label="Next Slide"
        @click="slideNext"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <div class="relative z-10 w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-2 mb-10 w-full">
        <LandingDot
          v-model="activeSlide"
          :count="galleryData.length"
          active-class="bg-[#FFEEAD]"
        />
      </div>

      <div>
        <LandingButton
          :label="t('gallery.button')"
          class="bg-[#1A3622] border-none text-white hover:bg-[#0D1C11] ring-1 ring-white/20"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { galleryData } from '../../../data/landing/gallery'
import { useGalleryCarousel } from '~/composables/landing/useGalleryCarousel'
import LandingDot from '~/components/reusable/LandingDot.vue'

const { t } = useI18n()
const { activeSlide, carouselRef, slidePrev, slideNext, handleScroll }
  = useGalleryCarousel()

void carouselRef
</script>
