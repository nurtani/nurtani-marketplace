<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { challengesData } from "../../../data/landing/challenge";

const { locale } = useI18n();
const { t } = useI18n();

const activeChallenges = computed(() => {
  const currentLang = locale.value as "id" | "en";
  return challengesData[currentLang] || challengesData["id"];
});
</script>

<template>
  <section class="relative w-full flex flex-col py-16 md:py-20 overflow-hidden">
    <div
      class="absolute inset-0 w-full h-full pointer-events-none z-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url(&quot;/assets/backgrounds/farmer.png&quot;)"
    />

    <div
      class="absolute inset-0 z-10 pointer-events-none"
      style="
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.5) 30%,
          rgba(0, 0, 0, 0.2) 55%,
          rgba(0, 0, 0, 0.25) 100%
        );
      "
    />

    <div
      class="relative z-10 flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6 gap-8 h-fit"
    >
      <LandingChallengeHeader />

      <div class="relative w-full pt-8 md:pt-16 flex justify-center">
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 scale-75 sm:scale-95 md:scale-110 lg:scale-[1.3] pointer-events-auto"
        >
          <LandingChallengeStackholderDiagram />
        </div>

        <div
          class="relative z-10 grid grid-cols-2 w-full gap-x-2 sm:gap-x-6 md:gap-x-[28rem] lg:gap-x-[38rem] pt-4 md:pt-0"
        >
          <div class="flex flex-col gap-24 md:gap-40 lg:gap-52">
            <LandingChallengeCard
              v-for="(item, index) in activeChallenges.filter(
                (_, i) => i % 2 === 0,
              )"
              :key="`left-${index}`"
              :title="item.title"
              :description="item.description"
              :align="index === 0 ? 'left' : 'center'"
              :class="[
                index === 0 ? 'mb-10 md:mb-0 md:ml-4 lg:ml-8' : '',
                'md:self-center',
              ]"
              :icon="item.icon"
            />
          </div>

          <div
            class="flex flex-col gap-24 md:gap-40 lg:gap-52 mt-[100px] md:mt-[140px] lg:mt-[180px]"
          >
            <LandingChallengeCard
              v-for="(item, index) in activeChallenges.filter(
                (_, i) => i % 2 !== 0,
              )"
              :key="`right-${index}`"
              :title="item.title"
              :description="item.description"
              :align="index === 0 ? 'right' : 'center'"
              :class="[
                index === 0 ? 'mb-2 md:mr-4 lg:mr-8' : '',
                'md:self-center',
              ]"
              :icon="item.icon"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute z-10 bottom-6 left-6 md:left-10 text-white text-xs md:text-sm italic drop-shadow-md"
    >
      {{ t("challenge.caption") }}
    </div>
  </section>
</template>
