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

      <div class="relative shrink-0 flex items-center">
        <select
          v-model="selectedUnit"
          class="appearance-none bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#131722] uppercase pl-4 pr-8 h-[48px] cursor-pointer focus:outline-none"
        >
          <option
            v-for="unit in dummyUnits"
            :key="unit.id"
            :value="unit.value"
          >
            {{ unit.label }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute right-3 flex items-center text-[#131722]"
        >
          <svg
            class="h-3 w-3 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
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
import { dummyUnits } from '~/data/market/unit'

const quantity = ref(1)
const selectedUnit = ref(dummyUnits.value[0]?.value ?? 'kg')

const increment = () => {
  quantity.value++
}

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}
</script>
