<script setup lang="ts">
const { t } = useI18n();

defineProps({
  isMobile: { type: Boolean, default: false },
});
</script>

<template>
  <div :class="isMobile ? 'flex flex-col gap-4 w-full' : 'flex gap-3'">
    <NuxtLink
      to="/login"
      :class="[
        'border border-white text-white rounded-lg text-center font-medium hover:bg-white hover:text-[#1A4D2E] transition',
        isMobile ? 'px-4 py-3' : 'px-4 py-2',
      ]"
    >
      {{ t("auth.login") }}
    </NuxtLink>

    <NuxtLink
      to="/register"
      :class="[
        'bg-[#FFEEAD] text-[#1A4D2E] rounded-lg text-center font-semibold hover:opacity-90 transition',
        isMobile ? 'px-4 py-3' : 'px-4 py-2',
      ]"
    >
      {{ t("auth.register") }}
    </NuxtLink>
  </div>
</template>
