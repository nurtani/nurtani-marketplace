<template>
  <div
    class="w-full bg-[#FFFDF5] pb-[100px] lg:pb-0 px-[12px] py-[62px] md:px-[48px] md:py-[92px]"
  >
    <div
      class="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-[60px] justify-center mx-auto max-w-[1440px]"
    >
      <div
        class="w-full lg:max-w-[736px] flex flex-col gap-6 lg:shrink-0 min-w-0"
      >
        <ImageGallery :images="safeImages" />

        <div class="lg:hidden">
          <MarketProductDetailHeader :product="product" />
        </div>

        <MarketProductDetailDescription :description="product.description" />
      </div>

      <div class="hidden lg:flex w-full flex-1 flex-col gap-6 lg:mt-6">
        <MarketProductDetailHeader :product="product" />
        <MarketProductDetailOrderBox />
        <MarketProductDetailFarmerCard
          :seller="product.farmer"
          :trust-score="product.greenPoint"
          button-text="Lihat Semua Produk"
        />
      </div>

      <div class="lg:hidden w-full">
        <MarketProductDetailFarmerCard
          :seller="product.farmer"
          :trust-score="product.greenPoint"
          button-text="Lihat Semua Produk"
        />
      </div>
    </div>

    <div class="w-full pt-10 pb-20 md:pb-10">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Riwayat Produk
      </h2>
      <div class="prose max-w-none text-gray-600 mb-8">
        <p>Transparansi penuh dari benih hingga ke tangan Anda.</p>
      </div>
      <div class="relative flex flex-col gap-6">
        <div class="absolute left-0 top-4 bottom-8 w-[2px] bg-white z-0" />
        <MarketProductDetailHistory
          v-for="history in histories"
          :key="history.id"
          :history="history"
        />
      </div>
    </div>

    <div
      ref="orderBoxRef"
      data-order-box-mobile
      :style="{ bottom: orderBoxOffset }"
      class="lg:hidden fixed left-0 right-0"
    >
      <MarketProductDetailOrderBox />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DetailProduct } from '~~/types/market/development/ProductDetail'
import type { History } from '~~/types/market/development/ProductHistory'
import { useFloatingElement } from '~/composables/component/useFloatingElement'

const { updateOffset, orderBoxOffset } = useFloatingElement()

const orderBoxRef = ref<HTMLElement | null>(null)

const handleUpdate = () => {
  const footerEl = document.querySelector('footer') as HTMLElement | null

  updateOffset(orderBoxRef.value, footerEl)
}

let observer: ResizeObserver

onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      handleUpdate()
    })
  })

  observer = new ResizeObserver(handleUpdate)

  if (orderBoxRef.value) observer.observe(orderBoxRef.value)

  window.addEventListener('scroll', handleUpdate, { passive: true })
  window.addEventListener('resize', handleUpdate, { passive: true })
})

onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', handleUpdate)
  window.removeEventListener('resize', handleUpdate)
})

const { product } = defineProps<{
  product: DetailProduct
  histories: History[]
}>()

// const histories = computed(() => {
//   return product?.histories ? [...product.histories].reverse() : []
// })

const safeImages = computed(() => product?.imageUrls ?? [])
</script>
