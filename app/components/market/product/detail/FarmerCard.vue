<template>
  <div
    class="p-6 md:p-8 border border-gray-200 rounded-2xl bg-white flex flex-col gap-6"
  >
    <div class="flex items-start gap-4">
      <NuxtImg
        :src="seller.avatar"
        :alt="`Foto Profil ${seller.name}`"
        class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover shrink-0"
        loading="lazy"
      />

      <div class="flex-grow flex flex-col gap-1">
        <div class="flex items-start justify-between gap-2">
          <h3 class="text-lg md:text-xl font-bold text-[#1A202C]">
            {{ seller.name }}
          </h3>
          <div
            class="flex items-center gap-1.5 text-sm md:text-base text-[#11D411]"
          >
            <span class="font-semibold">{{ trustScore }}</span>
            <NuxtImg
              src="/icon/component/leaf2.png"
              alt="Icon Daun Kepercayaan"
              class="w-5 h-5 object-contain"
            />
          </div>
        </div>

        <div
          class="flex items-center gap-2 text-sm md:text-base text-[#4A5568]"
        >
          <NuxtImg
            src="/icon/component/location3.png"
            alt="Icon Lokasi"
            class="w-4 h-4 object-contain"
          />
          <span>{{ seller.location }}</span>
        </div>

        <div class="text-sm md:text-base text-[#4A5568]">
          <span class="font-normal">ID Petani: </span>
          <span class="font-medium text-[#4A5565]">{{ seller.farmerId }}</span>
        </div>
      </div>
    </div>

    <button
      class="w-full flex justify-center items-center gap-2 p-4 border border-gray-200 hover:border-green-300 rounded-xl transition-colors duration-200"
    >
      <NuxtImg
        src="/icon/component/tag.png"
        alt="Icon Tag"
        class="w-5 h-5 object-contain"
      />
      <span class="text-sm font-semibold text-[#1A4D2E]">
        {{ buttonText }}
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Seller } from '~~/types/market/product'

defineProps<{
  seller: Seller
  trustScore: number
  buttonText: string
}>()
</script>
