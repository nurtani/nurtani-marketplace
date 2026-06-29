<template>
  <MarketProductHistory :history="null" />
</template>

<script setup lang="ts">
// import { dummyProduct } from '~/data/market/product'

// const route = useRoute()

// const slug = route.params.slug as string
// const historyId = route.params.historyId as string

// const id = Number(slug.split('-').pop())
// const product = computed(() => dummyProduct.find(p => p.id === id) ?? null)

// const history = computed(() => {
//   if (!product.value?.histories) return null

//   return (
//     product.value.histories.find(h => String(h.id) === historyId) ?? null
//   )
// })

// onMounted(() => {
//   console.log("slug:", slug);
//   console.log("historyId:", historyId);
//   console.log("id:", id);
//   console.log("product:", product.value);
//   console.log("history:", history.value);
// });
</script>
