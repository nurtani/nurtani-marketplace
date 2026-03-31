<template>
  <div
    class="flex flex-col items-start gap-3 p-6 rounded-xl bg-white/5 border border-white/5 w-full sm:w-[252px]"
  >
    <div class="text-[#FDE692] flex items-center justify-center">
      <slot name="icon">
        <div class="w-6 h-6 bg-[#FDE692]/20 rounded-full" />
      </slot>
    </div>

    <div class="flex flex-col gap-1.5">
      <h3 class="text-white font-semibold text-[16px] leading-snug">
        {{ title }}
      </h3>
      <p class="text-white/70 text-[14px] leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardProps } from '~~/types/landing/green'

defineProps<CardProps>()
</script>
