<template>
  <div
    class="flex flex-col md:flex-row md:items-center justify-between bg-[#F3F4EE] border border-[#C2C9BB]/10 rounded-[16px] gap-4 p-[16px] md:p-5"
  >
    <div class="flex items-center gap-2">
      <NuxtImg
        src="/icon/histories/ShieldCheck.png"
        width="12"
        height="15"
        alt="ShieldCheck Icon"
        class="w-3 h-[15px] object-contain"
      />
      <span
        class="text-[10px] md:text-[11px] text-[#42493E] font-semibold tracking-wide uppercase"
      >
        Bukti Keaslian Digital
      </span>
    </div>

    <div class="w-full md:w-auto flex justify-center">
      <NuxtLink
        v-if="props.verification"
        :to="props.verification.url || '#'"
        target="_blank"
        class="flex items-center justify-center gap-3 w-full md:w-[220px] lg:w-[266px] h-[36px] md:h-[40px] bg-[#1A4D2E] hover:bg-[#143C25] text-white rounded-xl transition-colors duration-200"
      >
        <NuxtImg
          src="/icon/histories/ShieldCheck2.png"
          width="14"
          height="14"
          alt="ShieldCheck Icon"
          class="w-[14px] h-[14px] object-contain"
        />
        <span class="text-[14px] font-semibold">Bukti Keaslian</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  verification?: {
    label: string
    buttonText: string
    url: string
  }
}>()
</script>
