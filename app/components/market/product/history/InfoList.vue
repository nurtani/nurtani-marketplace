<template>
  <div class="flex flex-col gap-6 mt-2">
    <div class="flex items-center gap-4">
      <div
        class="w-[40px] h-[40px] flex flex-shrink-0 items-center justify-center border border-[#1A4D2E]/40 rounded-2xl"
      >
        <NuxtImg
          src="/icon/histories/calender2.png"
          width="18"
          height="20"
          alt="Callender Icon"
          class="w-[18px] h-5 object-contain"
        />
      </div>
      <div class="flex flex-col gap-0.5">
        <span
          class="text-[10px] text-[#42493E] font-semibold tracking-wide uppercase"
        >
          Tanggal & Waktu</span>
        <span class="text-[12px] text-[#1A1C19] font-semibold">{{
          props.history?.date
        }}</span>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div
        class="w-[40px] h-[40px] flex flex-shrink-0 items-center justify-center border border-[#1A4D2E]/40 rounded-2xl"
      >
        <NuxtImg
          src="/icon/histories/people.png"
          width="18"
          height="20"
          alt="Callender Icon"
          class="w-[18px] h-5 object-contain"
        />
      </div>
      <div class="flex flex-col gap-0.5">
        <span
          class="text-[10px] text-[#42493E] font-semibold tracking-wide uppercase"
        >Aktor Lapangan</span>
        <div class="text-[12px] text-[#1A1C19] font-semibold">
          <span>{{ props.history?.actor.name }}</span>
          <span>{{ props.history?.actor.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductHistory } from '~~/types/market/product'

const props = defineProps<{
  history?: ProductHistory
}>()
</script>
