<template>
  <div class="flex justify-center gap-2 mt-6">
    <button
      v-for="(_, index) in count"
      :key="index"
      @click="emit('update:modelValue', index)"
      :class="[
        'rounded-full transition-all duration-300 cursor-pointer w-4 h-4',
        modelValue === index ? 'bg-[#1a4731]' : 'bg-gray-300 hover:bg-gray-400',
      ]"
      :aria-label="`Go to slide ${index + 1}`"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  count: number;
  modelValue: number;
}>();

const emit = defineEmits<{
  "update:modelValue": [index: number];
}>();
</script>
