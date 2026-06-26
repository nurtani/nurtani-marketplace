<template>
  <div
    class="min-h-screen bg-[#FFFDF5] text-[#333333] font-sans pb-10 pt-20 md:pt-24 relative"
  >
    <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
      <div
        class="flex lg:hidden flex-row items-center justify-between gap-3 mt-2 mb-6"
      >
        <div class="w-full flex-1">
          <MarketProductSearchFilter @search="handleSearch" />
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
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            <!-- Loading: pertama kali fetch (belum ada data sama sekali) -->
            <template v-if="asyncStatus === 'loading'">
              <ProductCardSkeleton v-for="n in 8" :key="n" />
            </template>

            <template v-else-if="status === 'pending'">
              <ProductCardSkeleton v-for="n in 8" :key="n" />
            </template>

            <!-- Error -->
            <template v-else-if="status === 'error'">
              <ErrorState />
            </template>

            <!-- Success tapi kosong -->
            <template v-else-if="status === 'success' && products.length === 0">
              <div class="col-span-full">
                <EmtyState />
              </div>
            </template>

            <!-- Success ada data -->
            <template v-else-if="status === 'success'">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :product="product"
                :link-to="`/market/${slugify(product.name)}-${product.id}`"
                action-icon="+"
                action-variant="primary"
                @action="addToCart(product)"
              />
            </template>
          </div>
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
import { useProduct } from "~/composables/market/useProduct";
import { useCartMutation } from "~/composables/market/useCartMutation";
import ProductCardSkeleton from "~/components/reusable/ProductCardSkeleton.vue";
import EmtyState from "~/components/reusable/EmtyState.vue";
import ErrorState from "~/components/reusable/ErrorState.vue";

const {
  isFilterOpen,
  handleFilterChange,
  slugify,
  products,
  meta,
  status,
  asyncStatus,
  error,
  filters,
  handleSearch,
} = useProduct();
const { addToCart } = useCartMutation();
</script>
