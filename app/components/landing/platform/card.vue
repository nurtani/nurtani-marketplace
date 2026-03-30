<template>
  <div class="w-full relative">
    <!-- Mobile: overflow-hidden clips the peek effect -->
    <div class="overflow-hidden md:overflow-visible">
      <section
        ref="sliderRef"
        @scroll="handleScroll"
        class="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 md:pb-0 hide-scrollbar px-[10vw] md:px-0 -mx-[10vw] md:mx-0 w-[calc(100%+20vw)] md:w-full"
      >
        <div
          class="w-[78vw] md:w-full shrink-0 snap-center snap-always md:snap-align-none flex"
        >
          <LandingPlatformBaseCard
            image="/assets/platform/1.png"
            :title="t('platform.card.dashboard.header.title')"
            :description="t('platform.card.dashboard.header.description')"
          >
            <LandingPlatformContentDashboard />
          </LandingPlatformBaseCard>
        </div>

        <div
          class="w-[78vw] md:w-full shrink-0 snap-center snap-always md:snap-align-none flex"
        >
          <LandingPlatformBaseCard
            image="/assets/platform/2.png"
            :title="t('platform.card.bot.header.title')"
            :description="t('platform.card.bot.header.description')"
          >
            <LandingPlatformContentBot />
          </LandingPlatformBaseCard>
        </div>

        <div
          class="w-[78vw] md:w-full shrink-0 snap-center snap-always md:snap-align-none flex"
        >
          <LandingPlatformBaseCard
            image="/assets/platform/3.png"
            :title="t('platform.card.history.header.title')"
            :description="t('platform.card.history.header.description')"
          >
            <LandingPlatformContentTimeline />
          </LandingPlatformBaseCard>
        </div>
      </section>
    </div>

    <LandingDot
      class="md:hidden mt-3"
      :count="3"
      :model-value="activeIndex"
      @update:model-value="handleDotClick"
      active-class="bg-[#1A4D2E]"
      inactive-class="bg-[#D1D5DB] opacity-70"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlatformCarousel } from "~/composables/landing/usePlatformCarousel";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const { sliderRef, handleScroll, handleDotClick, activeIndex } =
  usePlatformCarousel();
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
