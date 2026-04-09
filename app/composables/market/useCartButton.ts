import { ref, onMounted, onUnmounted } from 'vue'

export function useCartButton() {
  const bottomOffset = ref('24px')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        bottomOffset.value = entry.isIntersecting
          ? `${entry.intersectionRect.height + 24}px`
          : '24px'
      },
      {
        threshold: [0, 1] // cukup ini, jangan overkill
      }
    )

    observer.observe(footer)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    bottomOffset
  }
}
