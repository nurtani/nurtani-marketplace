<template>
  <div
    class="w-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm flex flex-col h-full"
  >
    <div class="relative w-full aspect-[4/3] md:aspect-[5/4] bg-gray-100">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-cover"
        format="webp"
        loading="lazy"
      />

      <div
        class="absolute top-2 left-2 right-2 md:top-3 md:left-3 md:right-3 flex justify-between items-center gap-1.5 md:gap-2"
      >
        <span
          v-if="product.isFavorite"
          class="bg-[#E7000B] text-white text-[9px] md:text-[10px] font-extrabold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-wide flex items-center justify-center min-h-[24px] md:min-h-[26px] leading-none text-center w-max max-w-[55%] shadow-sm"
        >
          <span class="truncate">Produk Favorit</span>
        </span>

        <span
          v-else
          class="bg-[#1A4D2E] text-white text-[9px] md:text-[10px] font-extrabold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full uppercase tracking-wide flex items-center justify-center min-h-[24px] md:min-h-[26px] text-center leading-none w-max max-w-[55%] shadow-sm"
        >
          <span class="truncate">Panen Baru</span>
        </span>

        <span
          v-if="product.isVerified"
          class="bg-[#F4F1E4] text-[#1A4D2E] text-[9px] md:text-[10px] font-extrabold px-2 py-1 md:px-2.5 md:py-1.5 rounded-md md:rounded-lg flex items-center justify-center gap-1 uppercase tracking-wide min-h-[24px] md:min-h-[26px] leading-none w-max max-w-[45%] shadow-sm"
        >
          <svg
            class="w-3 h-3 shrink-0"
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
          <span class="truncate">Terverifikasi</span>
        </span>
      </div>
    </div>

    <div class="p-4 md:p-5 flex-grow flex flex-col justify-between">
      <div>
        <div
          class="flex items-center gap-1 text-[#6B7280] text-[9px] md:text-[11px] font-semibold mb-1.5 uppercase tracking-wider"
        >
          <NuxtImg
            src="/icon/component/location.png"
            alt="Ikon Lokasi"
            class="w-[10px] h-[12px] md:w-[12px] md:h-[15px] shrink-0"
            loading="lazy"
          />
          <span class="truncate">{{ product.location }}</span>
        </div>

        <h2
          class="text-sm md:text-xl py-1 md:py-2 font-extrabold text-[#111827] line-clamp-2 leading-snug"
        >
          {{ product.title }}
        </h2>

        <div class="flex items-center gap-1.5 md:gap-2 mt-2 md:mt-3 mb-4">
          <NuxtImg
            :src="product.seller.avatar"
            :alt="product.seller.name"
            class="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover shrink-0"
            format="webp"
            loading="lazy"
          />
          <div class="text-[10px] md:text-xs truncate">
            <span class="text-gray-500 hidden sm:inline md:inline">Oleh: </span>
            <span class="font-bold text-[#111827]">{{
              product.seller.name
            }}</span>
          </div>

          <div
            class="ml-auto flex items-center gap-1 text-[#00A63E] font-bold text-[10px] md:text-sm shrink-0"
          >
            {{ product.points }}
            <NuxtImg
              src="/icon/component/leaf.png"
              alt="Ikon Poin"
              class="w-3 h-3 md:w-4 md:h-4"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div>
        <hr class="border-gray-100 my-3">
        <div class="flex justify-between items-end">
          <div>
            <p class="text-gray-500 text-[9px] md:text-xs font-medium mb-0.5">
              {{ product.priceLabel }}
            </p>
            <p
              class="text-base md:text-2xl font-extrabold text-[#1A4D2E] leading-none"
            >
              {{ formatRupiah(product.price) }}
            </p>
          </div>

          <div>
            <slot name="action">
              <button
                class="bg-[#00A844] hover:bg-green-600 text-white w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center text-xl md:text-2xl font-light shadow-md transition-transform active:scale-95 shrink-0"
              >
                +
              </button>
            </slot>
          </div>
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
