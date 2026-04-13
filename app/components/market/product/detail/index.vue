<template>
  <div
    class="w-full bg-[#FFFDF5] px-[24px] py-[62px] md:px-[48px] md:py-[92px]"
  >
    <div
      class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] justify-center mx-auto max-w-[1440px]"
    >
      <div
        class="w-full lg:max-w-[736px] flex flex-col gap-6 lg:shrink-0 min-w-0"
      >
        <MarketProductDetailImageGallery :images="product.images" />
        <MarketProductDetailDescription :description="product.description" />
      </div>

      <div class="w-full flex-1 flex flex-col lg:mt-6">
        <MarketProductDetailHeader :product="product" />

        <MarketProductDetailOrderBox />
      </div>
    </div>

    <div class="mt-16 w-full pt-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Riwayat Produk
      </h2>

      <div class="prose max-w-none text-gray-600">
        <p>Transparansi penuh dari benih hingga ke tangan Anda</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~~/types/market/product'

defineProps<{
  product: Product
}>()
</script>
