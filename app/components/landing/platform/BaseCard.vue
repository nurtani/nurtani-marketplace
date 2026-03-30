<template>
  <div
    class="w-full h-full flex flex-col items-center rounded-[14px] bg-white text-center p-[24px] shadow-sm"
  >
    <NuxtImg
      :src="image"
      :alt="title"
      class="w-[150px] h-[150px] object-contain mb-4"
      format="webp"
      quality="100"
      preload
    />

    <h3 class="mb-4 text-2xl font-bold text-[#1A4D2E]">
      {{ title }}
    </h3>
    <p class="mb-4 text-[#4A5565] text-[16px]">
      {{ description }}
    </p>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  image: string
}>()
</script>
