<template>
  <div
    class="flex flex-col items-start justify-center gap-0 p-3 md:p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md w-[120px] md:w-[156px] shadow-lg"
  >
    <span class="text-xl md:text-2xl font-bold mb-0.5 md:mb-1 text-[#FDE692]">
      {{ value }}
    </span>

    <span
      class="text-[8px] md:text-[10px] text-gray-300 uppercase tracking-wider font-medium leading-tight"
    >
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { CardProps } from '~/../../types/landing/green'

defineProps<CardProps>()
</script>
