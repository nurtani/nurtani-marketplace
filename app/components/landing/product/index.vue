<template>
  <div
    class="relative min-h-screen bg-[#FFFDF5] py-16 px-4 md:px-8 overflow-hidden"
  >
    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
      <LandingProductHeader />

      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full mt-8 md:mt-10 justify-items-center"
      >
        <ProductCard
          v-for="item in dummyProducts"
          :key="item.id"
          :product="item"
        />
      </div>

      <div class="mt-12">
        <NuxtLink to="/market">
          <LandingButton :label="t('product.button')" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { dummyProduct } from '~/data/market/product'

const { t } = useI18n()
const dummyProducts = ref(dummyProduct)
</script>
