<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <div class="relative w-full">
    <div class="grid grid-cols-2 gap-x-3 md:gap-x-8 items-start w-full">
      <div class="flex flex-col gap-y-2 md:gap-y-4 mt-8">
        <div
          class="h-[350px] grid rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group aspect-[3/4]"
        >
          <NuxtImg
            src="/assets/picture/pakbudi.png"
            :alt="t('hero.visual.alt_farmer')"
            class="col-start-1 row-start-1 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            format="webp"
            fit="cover"
            preload
          />
          <div
            class="col-start-1 row-start-1 flex flex-col justify-end w-full px-3 md:px-6 pb-6 md:pb-24 text-start text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-10"
          >
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              {{ t("hero.visual.farmer_name") }} –<br class="md:hidden" />
              {{ t("hero.visual.farmer_role").split(" ")[0] }}
            </p>
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              {{ t("hero.visual.farmer_role").split(" ").slice(1).join(" ") }}
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

        <div
          class="h-[350px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/10 group"
        >
          <NuxtImg
            src="/assets/picture/product.png"
            :alt="t('hero.visual.alt_product')"
            class="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
            format="webp"
            fit="cover"
            preload
          />
        </div>
      </div>
    </div>
  </div>
</template>
