<template>
  <div class="flex flex-col gap-[20px] md:gap-[8px]">
    <div class="flex items-center gap-4">
      <span
        class="px-2 py-1 bg-[#ECFDF5] text-[#1A4D2E] text-xs font-bold uppercase tracking-wider rounded-md"
      >
        {{ product.category.name }}
      </span>

      <!-- Status badge -->
      <span
        :class="
          product.status === 'available'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-500'
        "
        class="px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-md"
      >
        {{ product.status === "available" ? "Tersedia" : "Habis" }}
      </span>
    </div>

    <h1
      class="text-[36px] md:text-[44px] font-extrabold text-[#131722] leading-tight"
    >
      {{ product.name }}
    </h1>

    <div class="flex items-baseline gap-2">
      <span class="text-4xl md:text-[36px] font-bold text-[#1E5631]">
        {{ product.price.formatted }}
      </span>
      <span class="text-[16px] text-gray-500">/ {{ product.unit }}</span>
    </div>

    <!-- Stock -->
    <p class="text-sm text-gray-500">
      Stok tersedia:
      <span class="font-semibold text-gray-700">{{ product.availableStock }} {{ product.unit }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import type { DetailProduct } from '~~/types/market/development/ProductDetail'

defineProps<{
  product: DetailProduct
}>()
</script>
