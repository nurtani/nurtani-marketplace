<template>
  <div class="relative w-full">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    >
      <Icon name="lucide:search" class="w-4 h-4 text-gray-400" />
    </div>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Cari Produk..."
      class="block w-full py-2.5 pl-11 pr-4 text-sm text-gray-900 bg-white border border-[#E5E7EB] rounded-[10px] focus:ring-2 focus:ring-[#1A4D2E] focus:outline-none transition-all duration-200"
    />
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";

const emit = defineEmits<{
  search: [value: string];
}>();

const searchQuery = ref("");

const debouncedSearch = useDebounceFn((value: string) => {
  emit("search", value);
}, 500);

watch(searchQuery, (value) => {
  debouncedSearch(value);
});
</script>
