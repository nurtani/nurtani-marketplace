<template>
  <div
    class="relative w-full flex items-center justify-center min-h-[450px] lg:min-h-[550px]"
  >
    <NuxtImg
      src="/assets/picture/green-flag.png"
      alt="Ilustrasi Daun Organik"
      class="w-[240px] md:w-[350px] lg:w-[400px] object-contain z-0"
      format="webp"
      loading="lazy"
    />

    <div
      class="absolute top-[20%] left-[5%] md:top-[10%] md:left-[10%] lg:left-12 z-10"
    >
      <LandingGreenFlagStatCard
        value="10K+"
        :label="t('green.card.left.label.1')"
      />
    </div>

    <div
      class="absolute top-[10%] right-[6%] md:top-[20%] md:right-0 lg:-right-[5%] z-10"
    >
      <LandingGreenFlagStatCard
        value="2,450"
        :label="t('green.card.left.label.2')"
        is-highlight
      />
    </div>

    <div
      class="absolute bottom-[10%] left-[0%] md:bottom-[5%] md:left-[5%] lg:left-[2%] z-10"
    >
      <LandingGreenFlagStatCard
        value="150+"
        :label="t('green.card.left.label.3')"
      />
    </div>

    <div
      class="absolute bottom-[0%] right-[0%] md:bottom-[-5%] md:right-[5%] lg:right-[8%] z-10"
    >
      <LandingGreenFlagStatCard
        value="2.3T Kg"
        :label="t('green.card.left.label.4')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Inisialisasi i18n
const { t } = useI18n()
</script>
