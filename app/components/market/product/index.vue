<template>
  <div
    class="min-h-screen bg-[#FFFDF5] text-[#333333] font-sans pb-10 pt-20 md:pt-24 relative"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
      <div
        class="flex lg:hidden flex-row items-center justify-between gap-3 mt-2 mb-6"
      >
        <div class="w-full flex-1">
          <MarketProductSearchFilter />
        </div>
        <div class="shrink-0">
          <MarketProductFilterButton @click="isFilterOpen = true" />
        </div>
      </div>

      <div class="flex gap-8">
        <aside class="hidden lg:block w-56 xl:w-64 shrink-0">
          <div
            class="sticky top-28 bg-white rounded-2xl p-6 border border-gray-100"
          >
            <MarketProductFilterContent
              :is-mobile="false"
              @filter-change="handleFilterChange"
            />
          </div>
        </aside>

        <div class="flex-1 min-w-0 flex flex-col h-full relative">
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6"
          >
            <NuxtLink
              v-for="product in dummyProducts"
              :key="product.id"
              :to="`/market/${slugify(product.title)}-${product.id}`"
            >
              <ProductCard :product="product" />
            </NuxtLink>
          </div>

          <MarketProductCartButton @click="handleCartClick" />
        </div>
      </div>
    </div>

    <Transition name="expand-from-button">
      <div
        v-if="isFilterOpen"
        class="fixed inset-0 z-50 w-full h-[100dvh] bg-white overflow-y-auto lg:hidden"
      >
        <div class="max-w-7xl mx-auto w-full h-full">
          <MarketProductFilterContent
            :is-mobile="true"
            @close="isFilterOpen = false"
            @filter-change="handleFilterChange"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '~/composables/market/useProduct'

const {
  isFilterOpen,
  handleFilterChange,
  handleCartClick,
  slugify,
  dummyProducts
} = useProduct()
</script>
