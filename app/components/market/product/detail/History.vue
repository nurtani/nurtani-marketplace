<template>
  <div class="relative pl-6">
    <div
      class="absolute left-0 top-3 w-3 h-3 rounded-full border-2 border-white z-10 shadow-sm -translate-x-1/2"
      :class="dotColor"
    />

    <div
      class="p-4 border border-gray-100 rounded-xl bg-white flex items-start gap-4 shadow-sm"
    >
      <div
        class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
        :class="iconContainerColor"
      >
        <NuxtImg
          :src="`/icon/component/${iconName}.png`"
          class="w-5 h-5 object-contain"
        />
      </div>

      <div class="flex flex-col gap-1">
        <h3 class="text-base font-bold text-gray-900 leading-tight">
          {{ history.title }}
        </h3>

        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2 text-gray-500 text-xs">
            <NuxtImg
              src="/icon/component/clock.png"
              class="w-3.5 h-3.5"
            />
            <span>{{ formattedDate }}</span>
          </div>
        </div>

        <p class="text-gray-500 text-sm leading-6 mt-1 line-clamp-2">
          {{ history.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { History } from '~~/types/market/development/ProductHistory'
import { useHistory } from '~/composables/market/detail/useHistory'

const props = defineProps<{
  history: History
}>()

const { getIcon, getContainerColor, getDotColor } = useHistory()

const iconName = computed(() => getIcon(props.history.type))
const dotColor = computed(() => getDotColor(props.history.type))
const iconContainerColor = computed(() =>
  getContainerColor(props.history.type)
)

// Format tanggal createdAt
const formattedDate = computed(() => {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  }).format(new Date(props.history.createdAt))
})
</script>
