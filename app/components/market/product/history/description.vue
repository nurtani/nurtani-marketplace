<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2.5">
      <div class="w-1 h-4 bg-[#F5BF00] rounded-full" />
      <span class="text-[14px] text-[#18402F] font-bold">
        Uraian Aktivitas
      </span>
    </div>
    <p class="text-[14px] text-[#42493E] leading-relaxed pl-1">
      {{ props.history?.activity }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProductHistory } from '~~/types/market/product'

const props = defineProps<{
  history?: ProductHistory
}>()
</script>
