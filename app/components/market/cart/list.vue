<script setup lang="ts">
import type { CartItem } from "~~/types/market/product";

const props = defineProps<{
  items: CartItem[];
}>();

const emit = defineEmits(["increment", "decrement", "remove"]);
</script>

<template>
  <div
    class="w-full bg-[#FAFCFA] rounded-[32px] p-5 sm:p-6 border border-gray-100 shadow-sm max-w-2xl mx-auto"
  >
    <h2 class="text-[22px] font-bold text-[#14552B] mb-6">
      Produk Pilihan Anda ({{ items.length }} item)
    </h2>

    <div class="flex flex-col gap-4">
      <CardCart
        v-for="item in items"
        :key="item.cartItemId"
        :item="item"
        @increment="(id: string | number) => emit('increment', id)"
        @decrement="(id: string | number) => emit('decrement', id)"
        @remove="(id: string | number) => emit('remove', id)"
      />

      <div
        v-if="items.length === 0"
        class="text-center py-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl"
      >
        <svg
          class="w-12 h-12 text-gray-300 mb-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path
            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
          ></path>
        </svg>
        <p class="text-gray-500 font-medium">Keranjang Anda masih kosong</p>
      </div>
    </div>
  </div>
</template>
