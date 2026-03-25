<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { challengesData } from "../../../../data/landing/challenge";

const { locale } = useI18n();
const { t } = useI18n();

const activeChallenges = computed(() => {
  const currentLang = locale.value as "id" | "en";
  return challengesData[currentLang] || challengesData["id"];
});
</script>

<template>
  <section class="relative w-full flex flex-col py-16 md:py-20">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url(&quot;/assets/backgrounds/farmer.png&quot;)"
    ></div>

    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.55) 0%,
          rgba(0, 0, 0, 0.25) 55%,
          rgba(0, 0, 0, 0.55) 100%
        );
      "
    ></div>

    <div
      class="relative z-10 flex flex-col w-full max-w-5xl mx-auto px-6 gap-8 h-fit"
    >
      <LandingChallengeHeader />

      <!-- Grid untuk SEMUA ukuran, stagger kolom kanan -->
      <div class="grid grid-cols-2 w-full gap-x-4 md:gap-x-96 pt-4 md:pt-0">
        <div class="flex flex-col gap-8 md:gap-10">
          <LandingChallengeCard
            v-for="(item, index) in activeChallenges.filter(
              (_, i) => i % 2 === 0,
            )"
            :key="index"
            :title="item.title"
            :description="item.description"
            :align="index === 0 ? 'left' : 'center'"
            :class="[index === 0 ? 'mb-14 md:mb-0' : '', 'md:self-center']"
          />
        </div>

        <div class="flex flex-col gap-8 md:gap-10 mt-[70px] md:mt-0">
          <LandingChallengeCard
            v-for="(item, index) in activeChallenges.filter(
              (_, i) => i % 2 !== 0,
            )"
            :key="index"
            :title="item.title"
            :description="item.description"
            :align="index === 0 ? 'right' : 'center'"
            :class="[index === 0 ? 'mb-2' : '', 'md:self-center']"
          />
        </div>
      </div>
    </div>

    <div
      class="absolute z-10 bottom-6 left-6 md:left-10 text-white text-xs md:text-sm italic"
    >
      {{ t("challenge.caption") }}
    </div>
  </section>
</template>
