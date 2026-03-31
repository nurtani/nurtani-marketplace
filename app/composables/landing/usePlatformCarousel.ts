import { ref, onMounted, nextTick } from 'vue'

export function usePlatformCarousel() {
  const sliderRef = ref<HTMLElement | null>(null)
  const activeIndex = ref(1)
  let scrollTimer: ReturnType<typeof setTimeout> | null = null

  const getCardMetrics = () => {
    if (!sliderRef.value) return { cardWidth: 0, gap: 0 }
    const cardWidth = sliderRef.value.children[0]?.clientWidth ?? 0
    const gap = parseFloat(getComputedStyle(sliderRef.value).columnGap) || 8
    return { cardWidth, gap }
  }

  const handleScroll = () => {
    if (!sliderRef.value) return

    if (scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      if (!sliderRef.value) return
      const { cardWidth, gap } = getCardMetrics()
      if (cardWidth === 0) return
      activeIndex.value = Math.round(
        sliderRef.value.scrollLeft / (cardWidth + gap)
      )
    }, 50)
  }

  const handleDotClick = (index: number) => {
    if (!sliderRef.value) return
    const { cardWidth, gap } = getCardMetrics()
    sliderRef.value.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth' // Smooth untuk klik manual
    })
  }

  onMounted(() => {
    nextTick(() => {
      if (window.innerWidth < 768 && sliderRef.value) {
        setTimeout(() => {
          if (!sliderRef.value) return
          const { cardWidth, gap } = getCardMetrics()

          sliderRef.value.scrollTo({
            left: 1 * (cardWidth + gap),
            behavior: 'smooth'
          })
        }, 300)
      } else {
        activeIndex.value = 0
      }
    })
  })

  return {
    sliderRef,
    handleScroll,
    handleDotClick,
    activeIndex
  }
}
