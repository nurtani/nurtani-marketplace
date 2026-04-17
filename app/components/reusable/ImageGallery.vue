<template>
  <div class="w-full p-4 rounded-xl">
    <div
      class="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden mb-4"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <NuxtImg
          v-if="safeImages.length"
          :key="activeIndex"
          :src="safeImages[activeIndex]"
          alt="Main Product"
          class="w-full h-full object-cover"
        />
      </transition>

      <div
        class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"
      >
        <button
          v-for="(img, index) in images"
          :key="'dot-' + index"
          aria-label="Select image"
          class="h-2 rounded-full transition-all duration-300"
          :class="
            activeIndex === index
              ? 'w-8 bg-white'
              : 'w-2 bg-white/50 hover:bg-white/80'
          "
          @click="activeIndex = index"
        />
      </div>
    </div>

    <div class="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
      <div
        v-for="(img, index) in safeImages"
        :key="'thumb-' + index"
        class="flex-shrink-0 w-28 sm:w-36 md:w-44 aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-4 relative"
        :class="
          activeIndex === index
            ? 'border-[#11D411]'
            : 'border-transparent hover:border-gray-600'
        "
        @click="activeIndex = index"
      >
        <div
          class="absolute inset-0 bg-black transition-opacity duration-200"
          :class="activeIndex === index ? 'opacity-0' : 'opacity-30'"
        />

        <NuxtImg
          :src="img"
          alt="Thumbnail"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImageGallery } from '~/composables/market/detail/useImageGallery'

const props = defineProps<{
  images: string[]
}>()
const { activeIndex, images } = useImageGallery(props.images)
const safeImages = computed(() => images.value ?? [])
</script>
