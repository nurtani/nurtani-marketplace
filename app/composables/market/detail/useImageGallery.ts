import { ref, watch } from 'vue'

export function useImageGallery(productImages: string[] | undefined) {
  const activeIndex = ref(0)

  const images = ref<string[]>(productImages ?? []) // ✅ safe default

  watch(
    () => productImages,
    (newImages) => {
      images.value = newImages ?? []
      activeIndex.value = 0
    },
    { immediate: true }
  )

  return { activeIndex, images }
}
