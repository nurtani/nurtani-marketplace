// stores/cart.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { CartItem, Product } from '~~/types/market/product'

export const useCartStore = defineStore(
  'cart',
  () => {
    const items = ref<CartItem[]>([])

    const uniqueItemCount = computed(() => items.value.length)
    function addItem(product: Product) {
      console.log('🛒 addItem dipanggil:', product.title)
      const exists = items.value.find(item => item.product.id === product.id)
      if (exists) {
        exists.quantity += 1
      } else {
        items.value.push({
          cartItemId: `${product.id}-${Date.now()}`,
          product,
          quantity: 1
        })
      }
      console.log('🛒 items sekarang:', items.value.length)
    }

    function removeItem(cartItemId: string | number) {
      items.value = items.value.filter(
        item => item.cartItemId !== cartItemId
      )
    }

    function clearCart() {
      items.value = []
    }

    return { items, uniqueItemCount, addItem, removeItem, clearCart }
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage()
    }
  }
)
