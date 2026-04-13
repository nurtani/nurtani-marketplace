<template>
  <div class="flex flex-col gap-[20px] md:gap-[8px]">
    <div class="flex items-center gap-4">
      <span
        class="px-2 py-1 bg-[#ECFDF5] text-[#1A4D2E] text-xs font-bold uppercase tracking-wider rounded-md"
      >
        {{ product.category.title }}
      </span>

      <div class="flex items-center gap-1.5 text-[14px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5 text-[#F59E0B]"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="font-bold text-gray-900">{{ product.rating }}</span>
        <span class="text-gray-500 text-[12px]">({{ product.reviewCount }} Ulasan)</span>
      </div>
    </div>

    <h1
      class="text-[#36] md:text-[44px] font-extrabold text-[#131722] leading-tight"
    >
      {{ product.title }}
    </h1>

    <div class="flex items-baseline gap-2">
      <span class="text-4xl md:text-[36px] font-bold text-[#1E5631]">
        {{ formatRupiah(product.price) }}
      </span>
      <span class="text-[16px] text-gray-500"> / {{ product.unit }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~~/types/market/product'

defineProps<{
  product: Product
}>()

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}
</script>
