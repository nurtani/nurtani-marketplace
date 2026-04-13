<template>
  <MarketProductDetail
    v-if="product"
    :product="product"
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
import { dummyProduct } from '~/data/market/product'

const route = useRoute()
const slug = route.params.slug as string
const id = Number(slug.split('-').pop())

const product = dummyProduct.find(products => products.id == id)
</script>
