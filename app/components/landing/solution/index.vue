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
      <div class="overflow-hidden">
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
      <LandingSolutionDotindex
        :count="activeChallenges.length"
        v-model="activeIndex"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { solutionsData } from "../../../../data/landing/solution";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const activeIndex = ref(0);
const { locale } = useI18n();

const activeChallenges = computed(() => {
  const currentLang = locale.value as "id" | "en";
  return solutionsData[currentLang] || solutionsData["id"];
});
</script>
