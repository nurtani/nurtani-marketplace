<script setup lang="ts">
import { useCartStore } from '~/composables/store/cart'

const cart = useCartStore()

// ✅ tambah return
const totalSustainabilityPoints = computed(() =>
  cart.items.reduce(
    (total, item) => total + (item.product?.points || 0) * item.quantity,
    0
  )
)

const handleIncrement = (cartItemId: string | number) => {
  const item = cart.items.find(i => i.cartItemId === cartItemId)
  if (item) item.quantity++
}

const handleDecrement = (cartItemId: string | number) => {
  const item = cart.items.find(i => i.cartItemId === cartItemId)
  if (item && item.quantity > 1) item.quantity--
}

const handleRemove = (cartItemId: string | number) => {
  cart.removeItem(cartItemId)
}

onMounted(() => {
  console.log('Cart after hydrate:', cart.items)
})
</script>

<template>
  <div
    class="min-h-screen mt-15 bg-[#F5F7F5] py-8 px-4 sm:px-6 flex justify-center"
  >
    <div class="w-full max-w-2xl flex flex-col gap-6">
      <ClientOnly>
        <MarketCartList
          :items="cart.items"
          @increment="handleIncrement"
          @decrement="handleDecrement"
          @remove="handleRemove"
        />

        <div class="flex flex-col gap-4">
          <div
            class="bg-gradient-to-b from-[#DCFCE7] to-[#F0FDF4] border border-[#86EFAC] rounded-[24px] p-5 flex items-center gap-4 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#14552B] flex items-center justify-center flex-shrink-0 shadow-md"
            >
              <NuxtImg
                src="/icon/component/globe.png"
                alt="Ikon Keberlanjutan"
                width="24"
                height="24"
                class="w-6 h-6 object-contain brightness-0 invert"
              />
            </div>

            <div>
              <h3 class="font-bold text-[#14552B] text-base mb-0.5">
                Kontribusi Keberlanjutan
              </h3>
              <p class="text-sm text-green-800">
                Anda mendapat
                <span class="font-extrabold">{{ totalSustainabilityPoints }} poin</span>
                keberlanjutan! Terus dukung petani lokal.
              </p>
            </div>
          </div>

          <div
            class="bg-[#1A4D2E] rounded-[24px] p-5 flex items-center gap-4 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#00C950]/30 border border-[#00C950]/30 flex items-center justify-center flex-shrink-0"
            >
              <NuxtImg
                src="/icon/nurtani.png"
                alt="Ikon Terverifikasi"
                width="24"
                height="24"
                class="w-6 h-6 object-contain"
              />
            </div>

            <div>
              <h3 class="font-bold text-white text-base mb-0.5">
                Terverifikasi & Terpercaya
              </h3>
              <p class="text-sm text-gray-200 leading-snug">
                Produk langsung dari petani lokal yang telah terverifikasi
                NurTani
              </p>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>
