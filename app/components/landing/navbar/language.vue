<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()

defineProps({
  isMobile: { type: Boolean, default: false }
})

// Warna tetap putih/terang karena background selalu hijau gelap
const activeClass = 'font-semibold text-white underline cursor-pointer'
const inactiveClass
  = 'text-gray-400 cursor-pointer hover:text-white transition'
</script>

<template>
  <div :class="['flex items-center gap-2', isMobile ? 'justify-start' : '']">
    <button
      :class="locale === 'id' ? activeClass : inactiveClass"
      @click="setLocale('id')"
    >
      ID
    </button>

    <span class="text-white">|</span>

    <button
      :class="locale === 'en' ? activeClass : inactiveClass"
      @click="setLocale('en')"
    >
      EN
    </button>
  </div>
</template>
