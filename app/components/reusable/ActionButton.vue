<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    icon?: string
    variant?: 'primary' | 'danger' | 'neutral'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    icon: '+',
    variant: 'primary',
    size: 'md'
  }
)

const emit = defineEmits<{
  (e: 'click'): void
}>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-8 h-8 text-xl'
    case 'lg':
      return 'w-12 h-12 text-2xl'
    default:
      return 'w-10 h-10 text-xl'
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'danger':
      return 'bg-red-500 hover:bg-red-600'
    case 'neutral':
      return 'bg-gray-400 hover:bg-gray-500'
    default:
      return 'bg-[#00A844] hover:bg-green-600'
  }
})
</script>

<template>
  <button
    :class="[
      'text-white rounded-full flex items-center justify-center shadow-md transition-transform active:scale-95',
      sizeClass,
      variantClass
    ]"
    @click="emit('click')"
  >
    {{ icon }}
  </button>
</template>
