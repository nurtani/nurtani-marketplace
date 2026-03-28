<template>
  <div
    class="w-full max-w-sm bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm flex flex-col"
  >
    <div class="relative h-[160px] md:h-[250px] w-full">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover"
        format="webp"
        loading="lazy"
      />
      <div
        class="absolute top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 flex justify-between items-center gap-2 md:gap-3"
      >
        <span
          v-if="product.isFavorite"
          class="bg-[#E7000B] text-white text-[8px] md:text-xs font-extrabold px-2 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-wide flex items-center justify-center h-5 md:h-8 leading-none flex-1 min-w-0 text-center"
        >
          Produk Favorit
        </span>
        <span
          v-else
          class="bg-[#1A4D2E] text-white text-[8px] md:text-xs font-extrabold px-2 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-wide flex items-center justify-center h-5 md:h-8 text-center leading-none flex-1 min-w-0"
        >
          Panen Baru
        </span>

        <span
          v-if="product.isVerified"
          class="bg-[#F4F1E4] text-[#1A4D2E] text-[8px] md:text-xs font-extrabold px-1.5 py-1 md:px-3 md:py-2 rounded-md md:rounded-lg flex items-center gap-1 md:gap-1.5 uppercase tracking-wide h-5 md:h-8 leading-none shrink-0"
        >
          <svg
            class="w-2.5 h-2.5 md:w-3.5 md:h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
            />
          </svg>
          Terverifikasi
        </span>
      </div>
    </div>

    <div class="p-3 md:p-6 flex-grow flex flex-col">
      <div
        class="flex items-center gap-1 text-[#6B7280] text-[9px] md:text-sm font-semibold mb-1.5 md:mb-2 uppercase tracking-wide"
      >
        <NuxtImg
          src="/icon/component/location.png"
          alt="Ikon Lokasi"
          class="w-[12px] h-[15px] shrink-0"
          loading="lazy"
        />
        <span class="truncate">{{ product.location }}</span>
      </div>

      <h2
        class="text-sm md:text-2xl py-3 font-extrabold text-[#111827] line-clamp-2 leading-tight"
      >
        {{ product.title }}
      </h2>

      <div class="flex items-center gap-1.5 md:gap-2 mb-6">
        <NuxtImg
          :src="product.seller.avatar"
          :alt="product.seller.name"
          class="w-5 h-5 md:w-8 md:h-8 rounded-full object-cover shrink-0"
          format="webp"
          loading="lazy"
        />
        <div class="text-[10px] md:text-[15px] truncate">
          <span class="text-gray-500 hidden sm:inline md:inline">Oleh: </span>
          <span class="font-bold text-[#111827]">{{
            product.seller.name
          }}</span>
        </div>

        <div
          class="ml-auto flex items-center gap-1 md:gap-1.5 text-[#00A63E] font-bold text-xs md:text-lg shrink-0"
        >
          {{ product.points }}
          <NuxtImg
            src="/icon/component/leaf.png"
            alt="Ikon Poin"
            class="w-3 h-3 md:w-5 md:h-5"
            loading="lazy"
          />
        </div>
      </div>

      <hr class="border-gray-100 my-1.5 md:my-2">

      <div class="flex justify-between items-end mt-1.5 md:mt-2">
        <div>
          <p
            class="text-gray-500 text-[9px] md:text-[15px] font-medium mb-0.5 md:mb-1"
          >
            {{ product.priceLabel }}
          </p>
          <p
            class="text-base md:text-[28px] font-extrabold text-[#1A4D2E] leading-none"
          >
            {{ formatRupiah(product.price) }}
          </p>
        </div>

        <div>
          <slot name="action">
            <button
              class="bg-[#00A844] hover:bg-green-600 text-white w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-3xl font-light shadow-lg transition-transform active:scale-95 shrink-0"
            >
              +
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/../../types/landing/product'

defineProps<{
  product: Product
}>()

const formatRupiah = (number: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(number)
}
</script>
