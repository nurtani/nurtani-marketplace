<template>
  <button
    :style="{ bottom: bottomOffset }"
    class="fixed right-6 md:right-10 flex items-center justify-center w-[56px] h-[56px] md:w-16 md:h-16 bg-[#1A4F32] rounded-full shadow-[0_8px_24px_rgba(26,79,50,0.4)] hover:bg-[#143C25] active:scale-95 transition-all duration-300 cursor-pointer z-50"
    aria-label="Buka Keranjang"
    @click="$emit('click')"
  >
    <NuxtImg
      src="/icon/product/cart.png"
      alt="Ikon Keranjang"
      width="24"
      height="24"
      class="object-contain"
    />
  </button>
</template>

<script setup lang="ts">
import { useCartButton } from '@/composables/market/useCartButton'

defineEmits(['click'])

const { bottomOffset } = useCartButton()
</script>
