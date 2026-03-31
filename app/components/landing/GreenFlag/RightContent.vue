<template>
  <div class="flex flex-col items-start w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full sm:w-fit">
      <LandingGreenFlagFeatureCard
        :title="t('green.card.right.leaf.title')"
        :description="t('green.card.right.leaf.description')"
      >
        <template #icon>
          <div
            class="w-14 h-14 rounded-xl bg-[#305846] flex items-center justify-center backdrop-blur-md"
          >
            <NuxtImg
              src="/icon/green-flag/1.png"
              alt="Icon"
              class="w-6 h-6 object-contain"
            />
          </div>
        </template>
      </LandingGreenFlagFeatureCard>

      <LandingGreenFlagFeatureCard
        :title="t('green.card.right.cart.title')"
        :description="t('green.card.right.cart.description')"
      >
        <template #icon>
          <div
            class="w-14 h-14 rounded-xl bg-[#305846] flex items-center justify-center backdrop-blur-md"
          >
            <NuxtImg
              src="/icon/green-flag/2.png"
              alt="Icon"
              class="w-6 h-6 object-contain"
            />
          </div>
        </template>
      </LandingGreenFlagFeatureCard>

      <LandingGreenFlagFeatureCard
        :title="t('green.card.right.community.title')"
        :description="t('green.card.right.community.description')"
      >
        <template #icon>
          <div
            class="w-14 h-14 rounded-xl bg-[#305846] flex items-center justify-center backdrop-blur-md"
          >
            <NuxtImg
              src="/icon/green-flag/3.png"
              alt="Icon"
              class="w-6 h-6 object-contain"
            />
          </div>
        </template>
      </LandingGreenFlagFeatureCard>

      <LandingGreenFlagFeatureCard
        :title="t('green.card.right.trophy.title')"
        :description="t('green.card.right.trophy.description')"
      >
        <template #icon>
          <div
            class="w-14 h-14 rounded-xl bg-[#305846] flex items-center justify-center backdrop-blur-md"
          >
            <NuxtImg
              src="/icon/green-flag/4.png"
              alt="Icon"
              class="w-6 h-6 object-contain"
            />
          </div>
        </template>
      </LandingGreenFlagFeatureCard>
    </div>

    <button
      class="self-center sm:self-start mt-8 sm:mt-10 flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FDE692] text-[#0A5F38] font-bold text-sm sm:text-base rounded-full hover:bg-[#fbd85d] transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      {{ t("green.card.button") }}

      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line
          x1="7"
          y1="17"
          x2="17"
          y2="7"
        />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
