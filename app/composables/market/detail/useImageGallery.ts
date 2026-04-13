import { ref } from 'vue'

export function useImageGallery(productImages: string[]) {
  const activeIndex = ref(0)

  const images = ref(productImages)

  return { activeIndex, images }
}
