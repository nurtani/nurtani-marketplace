<script setup lang="ts">
import { useCartStore } from '~/composables/store/cart'

const cart = useCartStore()

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
    class="min-h-screen mt-20 bg-[#F5F7F5] pt-12 pb-36 lg:pb-12 px-4 sm:px-6 lg:px-8 flex justify-center"
  >
    <div
      class="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
    >
      <ClientOnly>
        <div class="lg:col-span-8 flex flex-col gap-6">
          <MarketCartList
            :items="cart.items"
            @increment="handleIncrement"
            @decrement="handleDecrement"
            @remove="handleRemove"
          />
        </div>

        <div class="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-28">
          <div
            class="bg-gradient-to-b from-[#DCFCE7] to-[#F0FDF4] border border-[#86EFAC] rounded-[24px] p-5 flex items-center gap-4 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#14552B] flex items-center justify-center flex-shrink-0"
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
                keberlanjutan!
              </p>
            </div>
          </div>

          <div class="hidden lg:block">
            <MarketCartSummary />
          </div>

          <div
            class="bg-[#1A4D2E] rounded-[24px] p-5 flex items-center gap-4 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#00C950]/20 border border-[#00C950]/30 flex items-center justify-center flex-shrink-0"
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

  <ClientOnly>
    <Teleport to="body">
      <div
        class="fixed bottom-0 left-0 right-0 z-[100] bg-white p-4 pb-6 border-t border-gray-100 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] rounded-t-[24px] flex flex-col lg:hidden max-h-[85vh] overflow-y-auto"
      >
        <div
          class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-4 flex-shrink-0"
        />

        <MarketCartSummary />
      </div>
    </Teleport>
  </ClientOnly>
</template>
