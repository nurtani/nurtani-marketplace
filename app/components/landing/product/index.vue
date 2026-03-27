<template>
  <div
    class="relative min-h-screen bg-[#F4F1E4] py-16 px-4 md:px-8 font-sans overflow-hidden"
  >
    <div
      class="absolute inset-0 z-0 pointer-events-none bg-repeat"
      style="
        background-image: url(&quot;/assets/backgrounds/product.png&quot;);
        opacity: 0.07;
        background-size: 400px;
      "
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
      <LandingProductHeader />

      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-8 md:mt-10 justify-items-center"
      >
        <ProductCard
          v-for="item in activeProduct"
          :key="item.id"
          :product="item"
        />
      </div>

      <div class="mt-12">
        <LandingButton :label="t('product.button')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productData } from "../../../data/landing/product";
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();
const { t } = useI18n();

const activeProduct = computed(() => {
  const currentLang = locale.value as "id" | "en";
  return productData[currentLang] || productData["id"];
});
</script>
