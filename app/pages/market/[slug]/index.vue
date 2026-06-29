<template>
  <MarketProductDetail
    v-if="product"
    :product="product"
    :histories="histories"
  />
  <div
    v-else
    class="min-h-screen flex items-center justify-center"
  >
    <p class="text-gray-500">
      Produk tidak ditemukan
    </p>
  </div>
</template>

<script setup lang="ts">
import { useDetailProduct } from '~/composables/market/development/queries/useDetail'
import { useProductHistory } from '~/composables/market/development/queries/useHistory'

definePageMeta({
  showCart: true
})

const route = useRoute()

// ✅ Fix — ambil 5 bagian terakhir untuk UUID lengkap
const id = computed<string>(() => {
  const slug = route.params.slug as string
  const parts = slug.split('-')
  // UUID terdiri dari 5 segment, ambil dari belakang
  return parts.slice(-5).join('-')
})

const { data } = useDetailProduct(id)
const { data: historyData } = useProductHistory(id)

const product = computed(() => data.value?.data)
const histories = computed(() => historyData.value?.data ?? [])
</script>
