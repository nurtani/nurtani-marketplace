<template>
  <div class="flex flex-col gap-1.5">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <NuxtImg
          src="/icon/histories/calender.png"
          width="20"
          height="20"
          alt="Calender Icon"
          class="w-5 h-5 object-contain"
        />
        <span class="text-[16px] text-[#18402F] font-bold capitalize">
          Rincian {{ props.history?.type }}
        </span>
      </div>
      <div
        class="flex items-center gap-1.5 px-3 py-1.5 bg-[#E8F5F1] border border-[#00D492]/50 rounded-full"
      >
        <NuxtImg
          src="/icon/histories/check.png"
          width="8"
          height="auto"
          alt="Check Icon"
          class="w-2 h-auto object-contain"
        />
        <span class="text-[8px] md:text-[12px] text-[#047857] capitalize">
          {{ props.history?.type }}
        </span>
      </div>
    </div>

    <p class="text-[14px] text-gray-600 font-medium ml-8">
      Batch ID: #{{ props.history?.id }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ProductHistory } from '~~/types/market/product'

const props = defineProps<{
  history?: ProductHistory
}>()

onMounted(() => {
  console.log('Header History Testing: ', props.history?.id)
})
</script>
