<template>
  <div
    class="min-h-screen bg-[#FFFDF5] text-[#333333] font-sans pb-10 pt-20 md:pt-24 relative"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
      <!-- Mobile: search + filter button -->
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

      <!-- Desktop: sidebar + grid -->
      <div class="flex gap-8">
        <!-- Sidebar filter (desktop only) -->
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

        <!-- Product grid -->
        <div class="flex-1 min-w-0 flex flex-col h-full relative">
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            <ProductCard
              v-for="product in dummyProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <MarketProductCartButton @click="handleCartClick" />
        </div>
      </div>
    </div>

    <!-- Mobile filter overlay -->
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
import { ref } from 'vue'
import type { Filters } from '~/../../types/market/FilterOption'

const isFilterOpen = ref(false)

const handleFilterChange = (newFilters: Filters) => {
  console.log('Filter diterapkan:', newFilters)
}

const handleCartClick = () => {
  console.log('cart clicked')
}

const dummyProducts = ref([
  {
    id: 1,

    title: 'Beras Pandan Wangi Organik Premium',

    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=500&auto=format&fit=crop', // Gambar dummy

    isFavorite: false,

    isVerified: true,

    location: 'Gianyar, Bali',

    seller: {
      name: 'Petani Sejahtera',

      avatar: 'https://i.pravatar.cc/150?img=11'
    },

    points: 150,

    priceLabel: 'Harga per kg',

    price: 25000
  },

  {
    id: 2,

    title: 'Mangga Harum Manis Panen Pagi',

    image:
      'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=500&auto=format&fit=crop',

    isFavorite: true,

    isVerified: true,

    location: 'Buleleng, Bali',

    seller: {
      name: 'Kebun Pak Wayan',

      avatar: 'https://i.pravatar.cc/150?img=12'
    },

    points: 85,

    priceLabel: 'Harga per 500g',

    price: 15000
  },

  {
    id: 3,

    title: 'Sayur Bayam Hidroponik Segar',

    image:
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=500&auto=format&fit=crop',

    isFavorite: false,

    isVerified: false,

    location: 'Denpasar, Bali',

    seller: {
      name: 'Green House Bali',

      avatar: 'https://i.pravatar.cc/150?img=33'
    },

    points: 40,

    priceLabel: 'Harga per ikat',

    price: 8000
  },

  {
    id: 4,

    title: 'Kopi Arabika Kintamani Roast Bean',

    image:
      'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=500&auto=format&fit=crop',

    isFavorite: true,

    isVerified: true,

    location: 'Bangli, Bali',

    seller: {
      name: 'Kintamani Roastery',

      avatar: 'https://i.pravatar.cc/150?img=68'
    },

    points: 320,

    priceLabel: 'Harga per 250g',

    price: 65000
  }
])
</script>
