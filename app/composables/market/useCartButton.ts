// composables/market/useCartButton.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useCartButton() {
  const bottomOffset = ref('24px')
  const GAP = 24 // jarak dari tepi bawah viewport (px)

  function updateOffset() {
    const footer = document.querySelector('footer')
    if (!footer) return

    const footerTop = footer.getBoundingClientRect().top
    const viewportHeight = window.innerHeight

    // Seberapa jauh footer masuk ke viewport dari bawah
    const overlap = viewportHeight - footerTop

    if (overlap > 0) {
      // Footer mulai terlihat → naikkan button
      bottomOffset.value = `${overlap + GAP}px`
    } else {
      // Footer belum terlihat → posisi default
      bottomOffset.value = `${GAP}px`
    }
  }

  onMounted(() => {
    updateOffset() // inisialisasi
    window.addEventListener('scroll', updateOffset, { passive: true })
    window.addEventListener('resize', updateOffset, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateOffset)
    window.removeEventListener('resize', updateOffset)
  })

  return { bottomOffset }
}
