<template>
  <div class="p-5 border border-gray-200 rounded-xl bg-white shadow-sm">
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
