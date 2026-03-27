<template>
  <section class="py-16 px-4 bg-white">
    <!-- Header -->
    <LandingSolutionHeader />

    <!-- Desktop: 4-column grid -->
    <div
      class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto"
    >
      <LandingSolutionCard
        v-for="(item, index) in activeChallenges"
        :key="item.id"
        :number="item.id"
        :iconSrc="item.icon"
        :title="item.title"
        :description="item.description"
        :variant="index % 2 === 1 ? 'dark' : 'light'"
      />
    </div>

    <!-- Mobile: Carousel -->
    <div class="md:hidden">
      <div
        class="overflow-hidden"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div
            v-for="(item, index) in activeChallenges"
            :key="item.id"
            class="min-w-full px-2"
          >
            <LandingSolutionCard
              :number="item.id"
              :iconSrc="item.icon"
              :title="item.title"
              :description="item.description"
              :variant="index % 2 === 1 ? 'dark' : 'light'"
              :mobile="true"
            />
          </div>
        </div>
      </div>

      <!-- Dot Index -->
      <LandingDot
        :count="activeChallenges.length"
        v-model="activeIndex"
        active-class="bg-[#1a4731]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSolutionCarousel } from "~/composables/landing/useSolutionCarousel";

const { activeIndex, activeChallenges, handleTouchStart, handleTouchEnd } =
  useSolutionCarousel();
</script>
