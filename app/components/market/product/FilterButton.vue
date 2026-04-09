<template>
  <button
    class="flex items-center justify-center w-[44px] h-[44px] bg-[#1A4F32] rounded-[12px] shadow-sm hover:bg-[#143C25] active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
    aria-label="Buka Filter"
    @click="$emit('click')"
  >
    <NuxtImg
      src="/icon/product/filter.png"
      alt="Ikon Filter"
      width="24"
      height="24"
      class="object-contain"
    />
  </button>
</template>

<script setup>
defineEmits(['click'])
</script>
