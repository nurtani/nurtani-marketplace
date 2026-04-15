export const useActionButton = (
  size: Ref<'sm' | 'md' | 'lg'>,
  variant: Ref<'primary' | 'danger' | 'neutral'>
) => {
  const sizeClass = computed(() => {
    switch (size.value) {
      case 'sm':
        return 'w-8 h-8 text-xl'
      case 'lg':
        return 'w-12 h-12 text-2xl'
      default:
        return 'w-10 h-10 text-xl'
    }
  })

  const variantClass = computed(() => {
    switch (variant.value) {
      case 'danger':
        return 'bg-red-500 hover:bg-red-600'
      case 'neutral':
        return 'bg-gray-400 hover:bg-gray-500'
      default:
        return 'bg-[#00A844] hover:bg-green-600'
    }
  })

  return {
    sizeClass,
    variantClass
  }
}
