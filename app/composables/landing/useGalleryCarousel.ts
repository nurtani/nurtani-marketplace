import { ref, watch } from 'vue'
import { galleryData } from '~/data/landing/gallery'

export function useGalleryCarousel() {
  const activeSlide = ref(0)
  const carouselRef = ref<HTMLElement | null>(null)

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.value
    if (!carousel) return
    const card = carousel.children[index] as HTMLElement | undefined
    if (!card) return
    carousel.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }

  const slidePrev = () => {
    activeSlide.value
      = activeSlide.value > 0 ? activeSlide.value - 1 : galleryData.length - 1
  }

  const slideNext = () => {
    activeSlide.value
      = activeSlide.value < galleryData.length - 1 ? activeSlide.value + 1 : 0
  }

  watch(activeSlide, (newIndex) => {
    scrollToIndex(newIndex)
  })

  let scrollTimer: ReturnType<typeof setTimeout> | null = null
  const handleScroll = () => {
    if (scrollTimer) clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      const carousel = carouselRef.value
      if (!carousel) return

      const cards = Array.from(carousel.children) as HTMLElement[]
      const scrollLeft = carousel.scrollLeft

      let closestIndex = 0
      let minDist = Infinity
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - scrollLeft)
        if (dist < minDist) {
          minDist = dist
          closestIndex = i
        }
      })

      if (activeSlide.value !== closestIndex) {
        activeSlide.value = closestIndex
      }
    }, 50)
  }

  return {
    activeSlide,
    carouselRef,
    slidePrev,
    slideNext,
    handleScroll
  }
}
