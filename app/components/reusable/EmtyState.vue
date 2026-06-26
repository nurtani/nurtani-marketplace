<template>
  <!-- Tambahkan h-full dan min-h-[500px] di sini -->
  <div
    class="flex flex-col items-center justify-center w-full h-full min-h-screen p-8 text-center"
  >
    <NuxtImg
      src="/icon/nurtani2.png"
      alt="Logo NurTani"
      class="w-14 h-14 mb-6"
      quality="100"
      loading="lazy"
    />

    <h3 class="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h3>
    <p class="text-gray-500 max-w-md mb-6">
      Wah, sepertinya barang yang kamu cari sedang kosong atau tidak sesuai
      dengan filter. Coba gunakan kata kunci lain.
    </p>

    <button
      @click="$emit('reset-filter')"
      class="px-6 py-2.5 text-sm font-semibold text-[#1A4D2E] bg-transparent border border-[#1A4D2E] rounded-lg hover:bg-[#1A4D2E] hover:text-white transition-colors duration-200 ease-in-out"
    >
      Reset Filter
    </button>
  </div>
</template>

<script setup lang="ts">
// Mendefinisikan emit agar komponen parent (halaman market)
// bisa menangkap aksi klik tombol dan mereset state filter-nya
defineEmits(["reset-filter"]);
</script>
