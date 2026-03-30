<template>
  <div class="flex flex-col gap-4 rounded-[10px] bg-[#F4F5F7] p-4 w-full">
    <div class="flex items-center gap-3 w-full">
      <div class="w-8 h-8 bg-white shrink-0 rounded-full shadow-sm" />

      <div
        class="p-3 rounded-2xl rounded-bl-sm bg-white shadow-sm text-[12px] text-[#1A4D2E] leading-relaxed max-w-[85%]"
      >
        {{ t("platform.card.bot.content.chat_firts") }}
      </div>
    </div>

    <div class="flex items-center gap-3 w-full flex-row-reverse">
      <div class="w-8 h-8 bg-[#E8F5E9] shrink-0 rounded-full shadow-sm" />

      <div
        class="p-3 rounded-2xl rounded-br-sm bg-[#E8F5E9] shadow-sm text-[12px] text-[#1A4D2E] leading-relaxed max-w-[85%]"
      >
        {{ t("platform.card.bot.content.chat_second") }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
