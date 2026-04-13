<template>
  <div class="p-6 md:p-8 border border-gray-200 rounded-2xl bg-white">
    <div class="flex items-center gap-4 mb-4">
      <div
        class="flex justify-center items-center w-14 h-14 bg-[#DCFCE7] rounded-xl shrink-0"
      >
        <NuxtImg
          src="/icon/component/leaf2.png"
          alt="Leaf Icon"
          class="w-7 h-7 object-contain"
        />
      </div>

      <h2 class="text-2xl font-bold text-[#1A202C]">
        Detail Produk & Manfaat
      </h2>
    </div>

    <p class="text-[#364153] text-lg md:text-[16px] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>
