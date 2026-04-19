<template>
  <div
    v-if="history"
    class="min-h-screen bg-[#FFFDF5] px-4 md:px-8 py-8 lg:py-12 mx-auto w-full"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-12 md:pt-18"
    >
      <div class="w-full">
        <ImageGallery :images="history.images ?? []" />
      </div>

      <div class="w-full">
        <MarketProductHistoryCard :history="history" />
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen flex items-center justify-center bg-[#FFFDF5]"
  >
    <p class="text-gray-500 font-medium">
      Riwayat tidak ditemukan
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProductHistory } from '~~/types/market/product'

defineProps<{
  history: ProductHistory | null
}>()
</script>
