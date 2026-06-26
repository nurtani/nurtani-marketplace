<!-- <template>
  <div class="flex justify-center items-center w-full p-4 sm:p-8">
    <NuxtImg
      src="/icon/challege/diagram-stakholder-utuh.png"
      alt="Diagram Ekosistem Masalah Rantai Pasok Pertanian"
      class="w-full h-auto max-w-[340px] sm:max-w-[480px] md:max-w-[850px] object-contain drop-shadow-2xl"
    />
  </div>
</template>

<script setup lang="ts">
// Tidak memerlukan logic rumit karena semua elemen visual sudah menyatu di gambar
</script> -->

<template>
  <div class="flex justify-center items-center w-full">
    <div class="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px]">
      <NuxtImg
        src="/icon/challege/bg-diagram-polos.png"
        alt="Background Stakeholder Diagram"
        class="absolute inset-0 w-full h-full object-contain drop-shadow-xl z-0"
      />

      <div
        class="absolute top-[20%] sm:top-[28%] left-1/2 -translate-x-1/2 flex flex-col items-center z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <NuxtImg
          src="/icon/component/leaf3.png"
          alt="Icon Produk Organik"
          class="w-5 h-5 mb-2 object-contain"
        />
        <span
          class="text-white font-bold text-xs sm:text-base text-center px-2 drop-shadow-md"
        >
          Produk Organik
        </span>
      </div>

      <div
        class="absolute bottom-[18%] sm:bottom-[16%] left-[12%] sm:left-[16%] flex flex-col items-center z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <NuxtImg
          src="/icon/component/user.png"
          alt="Icon Masyarakat Modern"
          class="w-5 h-5 mb-2 object-contain"
        />
        <span
          class="text-white font-bold text-xs sm:text-base text-center px-2 drop-shadow-md"
        >
          Masyarakat<br>Modern
        </span>
      </div>

      <div
        class="absolute bottom-[18%] sm:bottom-[20%] right-[12%] sm:right-[16%] flex flex-col items-center z-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        <NuxtImg
          src="/icon/component/scarecrow.png"
          alt="Icon Petani"
          class="w-5 h-5 mb-2 object-contain"
        />
        <span
          class="text-white font-bold text-xs sm:text-base text-center px-2 drop-shadow-md"
        >
          Petani
        </span>
      </div>

      <div
        class="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        <span
          class="text-white font-extrabold text-sm sm:text-lg tracking-wide drop-shadow-md"
        >
          Masalah
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
