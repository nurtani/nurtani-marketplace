<template>
  <div class="w-full flex flex-col items-center p-0 m-0">
    <div
      v-for="(item, index) in timelineData"
      :key="index"
      class="flex items-start gap-2 w-full relative"
      :class="[
        // Gap antar tahapan
        index !== timelineData.length - 1 ? 'pb-4' : 'pb-0'
      ]"
    >
      <div class="flex flex-col items-center shrink-0 w-10 relative">
        <div
          class="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] z-10"
        >
          <div
            class="h-[28px] w-[28px] rounded-full flex items-center justify-center"
            :class="item.bgClass"
          >
            <NuxtImg
              :src="item.icon"
              :alt="t(item.titleKey)"
              class="w-[16px] h-[16px] object-contain"
              format="webp"
              quality="100"
            />
          </div>
        </div>

        <div
          v-if="index !== timelineData.length - 1"
          class="absolute top-10 left-1/2 -translate-x-1/2 w-[2px] h-full"
          :class="item.lineClass"
        />
      </div>

      <div class="flex-1 text-[14px] gap-1 leading-relaxed text-left">
        <h4
          class="font-bold mb-1"
          :class="[item.completed ? 'text-[#1A4D2E]' : 'text-[#9CA3AF]']"
        >
          {{ t(item.titleKey) }}
        </h4>
        <p class="text-xs text-[#6B7280]">
          {{ item.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
// Sesuaikan path import ini dengan struktur folder Anda
import { timelineData } from '~/data/landing/platform'

// Panggil fungsi translate
const { t } = useI18n()
</script>
