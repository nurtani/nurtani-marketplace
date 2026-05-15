<template>
  <div
    class="w-full flex flex-col gap-3 sm:gap-4 bg-transparent sm:bg-white sm:rounded-[24px] sm:shadow-sm sm:border sm:border-gray-100 sm:p-6 lg:max-w-[480px]"
  >
    <h2 class="text-lg sm:text-xl font-bold text-[#1f4e35]">
      Ringkasan Pesanan
    </h2>

    <hr class="border-gray-200 hidden sm:block">

    <div class="flex flex-col gap-1.5 sm:gap-2">
      <label class="text-xs sm:text-sm font-semibold text-gray-700">Kode Promo</label>
      <div class="flex gap-2 sm:gap-3">
        <div class="relative flex-1">
          <div
            class="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none"
          >
            <NuxtImg
              src="/icon/component/discount.png"
              class="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          </div>
          <input
            v-model="orderData.promoCode"
            type="text"
            class="w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-2.5 border border-gray-200 rounded-lg text-sm sm:text-base text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#1f4e35] focus:border-[#1f4e35]"
            placeholder="Masukkan kode promo"
          >
        </div>
        <button
          class="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#fae8a4] hover:bg-[#f3df91] text-[#1f4e35] font-bold text-sm sm:text-base rounded-lg transition-colors"
        >
          Pakai
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-1.5 sm:gap-3 mt-1 sm:mt-2">
      <div class="flex justify-between items-center">
        <span class="text-xs sm:text-sm text-gray-500 font-medium">Subtotal</span>
        <span class="text-sm sm:text-base font-bold text-gray-800">{{
          formatRupiah(orderData.subtotal)
        }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-xs sm:text-sm text-gray-500 font-medium">Biaya Pengiriman</span>
        <span class="text-sm sm:text-base font-bold text-gray-800">{{
          formatRupiah(orderData.shipping)
        }}</span>
      </div>
    </div>

    <hr class="border-gray-200 my-0.5 sm:my-1">

    <div class="flex justify-between items-center">
      <span class="text-base sm:text-xl font-bold text-[#1f4e35]">Total</span>
      <span class="text-xl sm:text-2xl font-black text-[#1f4e35]">{{
        formatRupiah(totalPrice)
      }}</span>
    </div>

    <button
      class="w-full py-2.5 sm:py-3.5 bg-[#1f4e35] hover:bg-[#163a27] text-white font-bold text-base sm:text-lg rounded-xl transition-colors mt-1"
    >
      Lanjut ke Pembayaran
    </button>

    <div
      class="flex items-center justify-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1"
    >
      <NuxtImg
        src="/icon/component/lock.png"
        class="w-3 h-3 sm:w-4 sm:h-4 object-contain"
      />
      <span class="text-[11px] sm:text-sm text-gray-500 font-medium">Pembayaran 100% aman & terenkripsi</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

// Dummy data object
const orderData = reactive({
  promoCode: 'NURTANI10',
  subtotal: 95500,
  shipping: 15000,
  discount: 0 // Bisa ditambahkan logic diskon nanti
})

// Computed total
const totalPrice = computed(() => {
  return orderData.subtotal + orderData.shipping - orderData.discount
})

// Utility function untuk format Rupiah
const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })
    .format(value)
    .replace('Rp', 'Rp ')
}
</script>
