<template>
  <div
    class="w-full bg-[#FFFDF5] pb-[100px] lg:pb-0 px-[12px] py-[62px] md:px-[48px] md:py-[92px]"
  >
    <div
      class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] justify-center mx-auto max-w-[1440px]"
    >
      <div
        class="w-full lg:max-w-[736px] flex flex-col gap-6 lg:shrink-0 min-w-0"
      >
        <MarketProductDetailImageGallery :images="product.images" />

        <div class="lg:hidden">
          <MarketProductDetailHeader :product="product" />
        </div>

        <MarketProductDetailDescription :description="product.description" />
      </div>

      <div class="hidden lg:flex w-full flex-1 flex-col gap-6 lg:mt-6">
        <MarketProductDetailHeader :product="product" />
        <MarketProductDetailOrderBox />
        <MarketProductDetailFarmerCard
          :seller="product.seller"
          :trust-score="product.points"
          button-text="Lihat Semua Produk"
        />
      </div>

      <div class="lg:hidden w-full">
        <MarketProductDetailFarmerCard
          :seller="product.seller"
          :trust-score="product.points"
          button-text="Lihat Semua Produk"
        />
      </div>
    </div>

    <div class="w-full pt-10 md:pb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Riwayat Produk
      </h2>
      <div class="prose max-w-none text-gray-600 mb-8">
        <p>Transparansi penuh dari benih hingga ke tangan Anda.</p>
      </div>
      <div class="relative flex flex-col gap-6">
        <div class="absolute left-0 top-4 bottom-8 w-[2px] bg-white z-0" />
        <MarketProductDetailHistory
          v-for="history in [...product.histories].reverse()"
          :key="history.id"
          :history="history"
        />
      </div>
    </div>

    <div
      data-order-box-mobile
      class="lg:hidden fixed bottom-0 left-0 right-0 z-50"
    >
      <MarketProductDetailOrderBox />
    </div>

    <!-- Cart button — visible on all screen sizes -->
    <CartButton @click="handleCartClick" />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~~/types/market/product'

defineProps<{
  product: Product
}>()

function handleCartClick() {
  // TODO: buka drawer/modal keranjang
}
</script>
