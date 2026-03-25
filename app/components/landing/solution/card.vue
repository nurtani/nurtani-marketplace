<template>
  <div
    :class="[
      'rounded-2xl p-6 border flex flex-col gap-4',
      variant === 'dark'
        ? 'bg-[linear-gradient(135deg,#1A4D2E_0%,#008236_100%)] text-white border-[#1a4731]'
        : 'bg-white text-[#1a4731] border-[linear-gradient(135deg,#1A4D2E_0%,#008236_100%)] shadow-sm',
    ]"
  >
    <!-- Icon + Number row -->
    <div class="flex items-start justify-between">
      <div
        :class="[
          'rounded-xl flex items-center justify-center',
          mobile ? 'w-16 h-16 rounded-2xl' : 'w-12 h-12',
          variant === 'dark'
            ? 'bg-white/20'
            : 'bg-[linear-gradient(135deg,#1A4D2E_0%,#008236_100%)]',
        ]"
      >
        <NuxtImg
          :src="iconSrc"
          :alt="title"
          :class="['object-contain', mobile ? 'w-8 h-8' : 'w-6 h-6']"
        />
      </div>
      <span
        :class="[
          'font-extrabold leading-none',
          mobile ? 'text-5xl' : 'text-4xl',
          variant === 'dark' ? 'text-white' : 'text-[#1a4731]',
        ]"
        >{{ number }}</span
      >
    </div>

    <!-- Text -->
    <div>
      <h3
        :class="[
          'font-bold mb-2',
          mobile ? 'text-lg' : 'text-base',
          variant === 'dark' ? 'text-white' : 'text-[#1a4731]',
        ]"
      >
        {{ title }}
      </h3>
      <p
        :class="[
          'text-sm leading-relaxed',
          variant === 'dark' ? 'text-white/80' : 'text-gray-500',
        ]"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SolutionCardProps } from "../../../../types/landing/solution";
withDefaults(defineProps<SolutionCardProps>(), {
  variant: "light",
  mobile: false,
});
</script>
