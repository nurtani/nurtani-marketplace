<template>
  <div
    class="col-span-full flex flex-col items-center justify-center w-full min-h-screen p-6 text-center"
  >
    <div class="mb-4 text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-20 h-20 mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>

    <h3 class="text-xl font-semibold text-gray-800">
      Oops! Gagal Memuat Produk
    </h3>
    <p class="mt-2 text-sm text-gray-500 max-w-md mx-auto">
      Maaf, sepertinya ada gangguan saat mengambil data produk. Pastikan
      koneksimu stabil atau silakan coba lagi.
    </p>

    <button
      @click=""
      class="mt-6 px-6 py-2.5 bg-green-800 text-white font-medium rounded-lg hover:bg-green-900 transition-colors focus:ring-4 focus:ring-green-100"
    >
      Coba Muat Ulang
    </button>

    <div
      class="mt-8 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-mono rounded-md border border-red-100"
    >
      Detail: Simulated error
    </div>
  </div>
</template>
