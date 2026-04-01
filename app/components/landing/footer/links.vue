<script setup lang="ts">
import type { LinkItem } from "~/../../types/landing/footer";
defineProps<{
  title: string;
  links: LinkItem[];
}>();
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <h4 class="text-white font-bold text-lg md:text-xl mb-2">
      {{ title }}
    </h4>

    <nav class="flex flex-col gap-y-3">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.url"
        class="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 w-fit"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </div>
</template>
