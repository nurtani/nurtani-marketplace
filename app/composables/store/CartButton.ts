// stores/cart.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem } from '~~/types/market/development/MarketProduct'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  const uniqueItemCount = computed(() => items.value.length)

  return { items, uniqueItemCount }
})
