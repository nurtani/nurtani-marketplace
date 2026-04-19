<template>
  <Transition name="cart-fade">
    <button
      v-if="cartVisible"
      :style="{
        bottom: `calc(${bottomOffset} + env(safe-area-inset-bottom))`
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
  </Transition>
</template>

<script setup lang="ts">
import { useFloatingElement } from '@/composables/component/useFloatingElement'

defineEmits(['click'])

const { bottomOffset, cartVisible, updateOffsetFooterOnly }
  = useFloatingElement()

const handleUpdate = () => {
  const footerEl = document.querySelector('footer') as HTMLElement | null
  updateOffsetFooterOnly(footerEl)
}

onMounted(() => {
  requestAnimationFrame(() => requestAnimationFrame(handleUpdate))
  window.addEventListener('scroll', handleUpdate, { passive: true })
  window.addEventListener('resize', handleUpdate, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleUpdate)
  window.removeEventListener('resize', handleUpdate)
})
</script>
