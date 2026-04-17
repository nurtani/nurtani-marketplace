<template>
  <div
    v-if="history"
    class="bg-white p-5 rounded-[16px] shadow-sm flex flex-col"
  >
    <!-- ✅ tambah v-if -->
    <MarketProductHistoryHeader :history="history" />
    <MarketProductHistoryInfoList
      class="mt-10"
      :history="history"
    />
    <MarketProductHistoryVerificationBanner
      v-if="history.verification"
      class="mt-10"
      :verification="history.verification"
    />
    <div class="border-t border-gray-100 mt-14 mb-8" />
    <MarketProductHistoryDescription :history="history" />
  </div>
</template>

<script setup lang="ts">
import type { ProductHistory } from '~~/types/market/product'

const { history } = defineProps<{
  history: ProductHistory | null // ✅ izinkan null
}>()
</script>
