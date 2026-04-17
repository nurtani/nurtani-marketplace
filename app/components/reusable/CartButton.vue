<template>
  <button
    :style="{
      bottom: `calc(${bottomOffset || '24px'} + env(safe-area-inset-bottom))`
    }"
    class="fixed right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#1A4F32] rounded-full shadow-[0_8px_24px_rgba(26,79,50,0.4)] hover:bg-[#143C25] active:scale-95 transition-all duration-300 cursor-pointer"
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
import { useFloatingElement } from '@/composables/component/useFloatingElement'

defineEmits(['click'])
const { bottomOffset } = useFloatingElement()
</script>
