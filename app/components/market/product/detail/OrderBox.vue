<template>
  <div class="p-[24px] border border-gray-200 rounded-2xl bg-white">
    <div class="flex items-center gap-4 mb-6">
      <span
        class="text-[12px] font-bold text-[#64748B] tracking-wider uppercase shrink-0"
      >
        Jumlah Pesanan
      </span>

      <div
        class="flex items-center justify-between flex-1 h-[48px] px-4 border border-gray-300 rounded-xl"
      >
        <button
          class="text-xl font-medium text-gray-800 hover:text-black focus:outline-none select-none w-8 h-8 flex items-center justify-start"
          :class="{ 'opacity-50 cursor-not-allowed': quantity <= 1 }"
          :disabled="quantity <= 1"
          @click="decrement"
        >
          &minus;
        </button>

        <span
          class="text-[14px] font-bold text-[#131722] select-none py-[8px] px-[12px]"
        >
          {{ quantity }}
        </span>

        <button
          class="text-xl font-medium text-[#11D411] hover:text-green-600 focus:outline-none select-none w-8 h-8 flex items-center justify-end"
          @click="increment"
        >
          &plus;
        </button>
      </div>

      <span class="text-sm font-bold text-[#64748B] uppercase shrink-0">
        /KG
      </span>
    </div>

    <button
      class="w-full bg-[#1E5631] hover:bg-[#164024] text-white font-medium py-[10px] px-[12px] rounded-xl transition-colors flex justify-center items-center gap-3"
    >
      <NuxtImg
        src="/icon/product/cart.png"
        alt="Cart Icon"
        class="w-6 h-6 object-contain"
      />
      <span class="text-[16px] font-semibold">Beli Sekarang</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const quantity = ref(1)

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>
