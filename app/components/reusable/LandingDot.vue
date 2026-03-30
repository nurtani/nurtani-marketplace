<template>
  <div class="flex justify-center gap-2 mt-6">
    <button
      v-for="(_, index) in count"
      :key="index"
      :class="[
        'rounded-full transition-all duration-300 cursor-pointer w-4 h-4',
        modelValue === index ? activeClass : inactiveClass,
      ]"
      :aria-label="`Go to slide ${index + 1}`"
      @click="emit('update:modelValue', index)"
    />
  </div>
</template>

<script setup lang="ts">
import type { DotProps } from "~/../../types/landing/dot";

withDefaults(defineProps<DotProps>(), {
  activeClass: "bg-[#FFFFFF]",
  inactiveClass: "bg-gray-300 hover:bg-gray-400",
});

const emit = defineEmits<{
  "update:modelValue": [index: number];
}>();
</script>
