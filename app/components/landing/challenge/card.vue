<script setup lang="ts">
import { computed } from 'vue'
import type { ChallengeCardProps } from '../../../../types/landing/challenge'

const props = withDefaults(defineProps<ChallengeCardProps>(), {
  align: 'left'
})

// Menentukan posisi flex item (kiri atau kanan)
const positionClass = computed(() => {
  if (props.align === 'right') return 'self-end'
  if (props.align === 'center') return 'self-center'
  return 'self-start'
})
</script>

<template>
  <div
    :class="[
      'bg-[#FFF5C3] shadow-md flex flex-col justify-center gap-[6px] overflow-hidden text-center',
      'w-[120px] h-[95px] rounded-[8.67px] p-[12px]',
      'md:w-[220px] md:h-[142px] md:rounded-[8.67px] md:p-[12px]',

      positionClass
    ]"
  >
    <h3
      class="text-[#2C4A3B] font-bold text-[10px] md:text-[16px] leading-snug line-clamp-2"
    >
      {{ title }}
    </h3>

    <p
      class="text-gray-700 text-[7px] md:text-[12px] leading-relaxed line-clamp-3"
    >
      {{ description }}
    </p>
  </div>
</template>
