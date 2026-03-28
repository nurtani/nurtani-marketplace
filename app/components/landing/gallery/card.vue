<template>
  <div
    class="relative w-full max-w-[320px] aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg font-sans group"
  >
    <NuxtImg
      :src="gallery.image"
      :alt="gallery.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-0"
      format="webp"
      loading="lazy"
    />

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-[#0e2207] via-[#0e2207]/80 to-transparent"
    />

    <div
      class="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col text-white"
    >
      <h2
        class="text-2xl font-extrabold mb-4 leading-tight tracking-wide line-clamp-2"
      >
        {{ gallery.title }}
      </h2>

      <hr class="border-white/30 mb-4 w-full">

      <div
        class="flex items-center gap-2 mb-2 text-sm font-bold uppercase tracking-wider"
      >
        <NuxtImg
          src="/icon/component/location2.png"
          alt="Ikon Lokasi"
          class="w-[21px] h-[20px] shrink-0"
          loading="lazy"
        />
        <span class="truncate">{{ gallery.location }}</span>
      </div>

      <div class="text-[15px] truncate">
        <span class="font-normal text-gray-300">Oleh: </span>
        <span class="font-bold">{{ gallery.seller.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GalleryCardProps } from '~/../../types/landing/gallery'

defineProps<{
  gallery: GalleryCardProps
}>()
</script>
