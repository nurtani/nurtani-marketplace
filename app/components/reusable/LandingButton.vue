<template>
  <button
    :type="type"
    class="bg-[#23492F] text-white border-[6px] border-[#D0D9D3] rounded-[20px] px-8 py-3 text-[18px] font-medium tracking-wide transition-all duration-200 hover:bg-[#1A3622] hover:border-[#BFCBDB] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#23492F] focus:ring-offset-2"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    label: string // Hapus tanda tanya (?) agar prop ini wajib diisi
  }>(),
  {
    type: 'button'
  }
)
</script>
