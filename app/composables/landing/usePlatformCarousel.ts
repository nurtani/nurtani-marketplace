import { ref } from 'vue'

export function usePlatformCarousel() {
  const sliderRef = ref<HTMLElement | null>(null)
  const activeIndex = ref(0)
  let scrollTimer: ReturnType<typeof setTimeout> | null = null

  const getCardMetrics = () => {
    if (!sliderRef.value) return { cardWidth: 0, gap: 0 }
    const cardWidth = sliderRef.value.children[0]?.clientWidth ?? 0
    // Read actual gap from computed style so it's always accurate
    const gap = parseFloat(getComputedStyle(sliderRef.value).columnGap) || 8
    return { cardWidth, gap }
  }

  const handleScroll = () => {
    if (!sliderRef.value) return

    // Debounce: only update the dot after scrolling settles
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
      behavior: 'smooth'
    })
  }

  return {
    sliderRef,
    handleScroll,
    handleDotClick,
    activeIndex
  }
}
