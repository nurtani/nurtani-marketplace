// composables/market/useCartButton.ts
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export function useCartButton() {
  const bottomOffset = ref('24px')
  const GAP = 24

  let resizeObserver: ResizeObserver | null = null
  let mutationObserver: MutationObserver | null = null

  function updateOffset() {
    const orderBox = document.querySelector('[data-order-box-mobile]')
    const orderBoxHeight
      = orderBox && window.innerWidth < 1024
        ? orderBox.getBoundingClientRect().height
        : 0

    const footer = document.querySelector('footer')
    let footerOverlap = 0
    if (footer) {
      const footerTop = footer.getBoundingClientRect().top
      footerOverlap = Math.max(0, window.innerHeight - footerTop)
    }

    const base = Math.max(orderBoxHeight, footerOverlap)
    bottomOffset.value = `${base + GAP}px`
  }

  function setupObservers() {
    resizeObserver = new ResizeObserver(updateOffset)

    const orderBox = document.querySelector('[data-order-box-mobile]')
    const footer = document.querySelector('footer')
    if (orderBox) resizeObserver.observe(orderBox)
    if (footer) resizeObserver.observe(footer)
  }

  onMounted(async () => {
    // Tunggu Vue selesai render
    await nextTick()

    // Tunggu browser selesai paint (2 frame untuk aman)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        updateOffset()
        setupObservers()
      })
    })

    // Fallback: jika elemen belum ada (SSR/hydration lambat),
    // watch sampai muncul di DOM
    mutationObserver = new MutationObserver(() => {
      const orderBox = document.querySelector('[data-order-box-mobile]')
      if (orderBox) {
        updateOffset()
        resizeObserver?.observe(orderBox)
        mutationObserver?.disconnect()
        mutationObserver = null
      }
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    window.addEventListener('scroll', updateOffset, { passive: true })
    window.addEventListener('resize', updateOffset, { passive: true })
  })

  onUnmounted(() => {
    resizeObserver?.disconnect()
    mutationObserver?.disconnect()
    window.removeEventListener('scroll', updateOffset)
    window.removeEventListener('resize', updateOffset)
  })

  return { bottomOffset }
}
