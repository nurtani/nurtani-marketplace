// stores/cart.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem } from '~~/types/market/product' // ✅ import dari types kamu

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  // Total jenis produk unik
  const uniqueItemCount = computed(() => items.value.length)

  return { items, uniqueItemCount }
})
