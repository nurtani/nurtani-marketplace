<script setup lang="ts">
import { computed } from "vue";
import type { ChallengeCardProps } from "../../../../types/landing/challenge";

const props = withDefaults(defineProps<ChallengeCardProps>(), {
  align: "left",
});

const positionClass = computed(() => {
  if (props.align === "right") return "self-end";
  if (props.align === "center") return "self-center";
  return "self-start";
});
</script>

<template>
  <div
    :class="[
      // 👇 1. Padding & Gap Vertikal diperkecil di mobile (p-3 & gap-y-2), desktop tetap (p-5 & gap-y-4)
      'flex flex-col justify-center gap-y-2 md:gap-y-4 rounded-xl border border-white/10 backdrop-blur-md p-3 md:p-5',

      // 👇 2. Lebar di mobile pakai w-full agar mengisi penuh kolom grid, desktop tetap w-[290px]
      'w-full h-auto',
      'md:w-[290px]',

      positionClass,
    ]"
    style="
      background: linear-gradient(
        to right,
        rgba(15, 23, 43, 0.2) 0%,
        rgba(0, 44, 34, 0.2) 50%,
        rgba(15, 23, 43, 0.2) 100%
      );
    "
  >
    <div class="flex items-center gap-x-2 md:gap-x-4">
      <div
        class="flex items-center justify-center shrink-0 w-8 h-8 md:w-[56px] md:h-[56px] rounded-lg md:rounded-[12px] bg-[#FACC15]/65"
      >
        <NuxtImg
          :src="icon || '/assets/challenge/1.png'"
          class="w-4 h-4 md:w-7 md:h-7 object-contain"
          format="webp"
        />
      </div>

      <h3
        class="text-white font-bold text-[11px] md:text-[16px] leading-tight line-clamp-3"
      >
        {{ title }}
      </h3>
    </div>

    <p class="text-white/90 text-[10px] md:text-[14px] leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
