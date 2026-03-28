<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  isMobile: { type: Boolean, default: false },
  isScrolled: { type: Boolean, default: false }
})
</script>

<template>
  <div :class="isMobile ? 'flex flex-col gap-4 w-full' : 'flex gap-3'">
    <NuxtLink
      to="/login"
      :class="[
        'bg-[#1A4D2E] text-white rounded-lg text-center font-medium transition-all duration-300 border hover:bg-white hover:text-[#1A4D2E]',
        isMobile ? 'px-4 py-3' : 'px-4 py-2',
        !isScrolled && !isMobile ? 'border-transparent' : 'border-white'
      ]"
    >
      {{ t("auth.login") }}
    </NuxtLink>

    <NuxtLink
      to="/register"
      :class="[
        'rounded-lg text-center font-semibold transition-all duration-300 border',
        isMobile ? 'px-4 py-3' : 'px-4 py-2',
        !isScrolled && !isMobile
          ? 'bg-transparent text-white border-white hover:bg-white hover:text-[#1A4D2E]'
          : 'bg-[#FFEEAD] text-[#1A4D2E] border-transparent hover:opacity-90'
      ]"
    >
      {{ t("auth.register") }}
    </NuxtLink>
  </div>
</template>
