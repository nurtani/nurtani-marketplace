<template>
  <div
    class="w-full h-full overflow-y-auto font-sans text-[#333333] p-6 lg:p-0 bg-white lg:bg-transparent"
  >
    <div class="flex items-center justify-between mb-8 lg:mb-6">
      <h2 class="text-xl font-bold text-[#1F2937]">
        {{ isMobile ? "Filter & Urutkan" : "Filter" }}
      </h2>

      <button
        v-if="isMobile"
        class="text-gray-500 hover:text-gray-800 transition-colors"
        aria-label="Tutup"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div v-if="!isMobile" class="mb-8">
      <h3 class="font-bold text-[#374151] mb-3 text-sm">Cari Produk</h3>
      <MarketProductSearchFilter @search="handleSearch" />
    </div>

    <div class="mb-8">
      <h3 class="font-bold text-[#374151] mb-3 text-sm lg:text-base">
        Urutkan
      </h3>
      <div class="relative max-w-sm">
        <select
          v-model="filters.sortBy"
          class="w-full appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:ring-2 focus:ring-[#1A4F32] focus:border-transparent cursor-pointer"
        >
          <option
            v-for="opt in sortOptionsMapped"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
        >
          <svg
            class="fill-current h-4 w-4"
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

    <div class="mb-8">
      <h3 class="font-bold text-[#374151] mb-4 text-sm lg:text-base">
        Kategori
      </h3>
      <div class="flex flex-col space-y-4 lg:space-y-3">
        <label
          v-for="cat in categoryOptions"
          :key="cat.value"
          class="flex items-center cursor-pointer group w-fit"
        >
          <input
            v-model="filters.category"
            type="radio"
            name="kategori"
            :value="cat.value"
            class="w-5 h-5 lg:w-4 lg:h-4 text-[#1A4F32] bg-white border-gray-400 focus:ring-[#1A4F32] focus:ring-2 cursor-pointer accent-[#1A4F32]"
          />
          <span
            class="ml-3 text-[15px] lg:text-sm"
            :class="
              filters.category === cat.value
                ? 'text-[#1A4F32]'
                : 'text-gray-600 group-hover:text-gray-800'
            "
          >
            {{ cat.label }}
          </span>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="font-bold text-[#374151] mb-4 text-sm lg:text-base">
        Status Produk
      </h3>
      <div class="flex flex-col space-y-4 lg:space-y-3">
        <label
          v-for="status in statusOptions"
          :key="status.value"
          class="flex items-center cursor-pointer group w-fit"
        >
          <input
            v-model="filters.status"
            type="checkbox"
            :value="status.value"
            class="w-5 h-5 lg:w-4 lg:h-4 text-[#1A4F32] bg-white border-gray-400 rounded focus:ring-[#1A4F32] focus:ring-2 cursor-pointer accent-[#1A4F32]"
          />
          <span
            class="ml-3 text-[15px] lg:text-sm text-gray-600 group-hover:text-gray-800"
          >
            {{ status.label }}
          </span>
        </label>
      </div>
    </div>

    <div class="mb-8">
      <h3 class="font-bold text-[#374151] mb-4 text-sm lg:text-base">Harga</h3>
      <div class="flex flex-col space-y-4 lg:space-y-3">
        <label
          v-for="price in priceOptions"
          :key="price.value"
          class="flex items-center cursor-pointer group w-fit"
        >
          <input
            v-model="filters.price"
            type="radio"
            name="harga"
            :value="price.value"
            class="w-5 h-5 lg:w-4 lg:h-4 text-[#1A4F32] bg-white border-gray-400 focus:ring-[#1A4F32] focus:ring-2 cursor-pointer accent-[#1A4F32]"
          />
          <span
            class="ml-3 text-[15px] lg:text-sm"
            :class="
              filters.price === price.value
                ? 'text-[#1A4F32]'
                : 'text-gray-600 group-hover:text-gray-800'
            "
          >
            {{ price.label }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilterContent } from "@/composables/market/useFilterContent";
import type { Filters } from "~~/types/market/FilterOption";

defineProps({
  isMobile: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (e: "close"): void;
  (e: "filter-change", payload: Filters): void;
  (e: "search", value: string): void;
}>();

const {
  filters,
  handleSearch,
  categoryOptions,
  statusOptions,
  priceOptions,
  sortOptionsMapped,
} = useFilterContent(emit);
</script>
