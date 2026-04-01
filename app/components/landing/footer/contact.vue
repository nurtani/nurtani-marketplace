<template>
  <div class="flex flex-col gap-y-4">
    <h4 class="text-white font-bold text-lg md:text-xl mb-2">
      Hubungi Kami
    </h4>

    <div class="flex flex-col gap-y-5">
      <div class="flex items-start gap-x-3 group">
        <NuxtImg
          src="/icon/footer/1.png"
          alt="Email Icon"
          class="w-5 h-5 mt-0.5 object-contain shrink-0"
          width="20"
          height="20"
        />
        <div class="flex flex-col">
          <span class="text-white font-semibold text-sm md:text-base">Email</span>
          <a
            href="mailto:hello@nurtani.com"
            class="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 mt-0.5"
          >
            hello@nurtani.com
          </a>
        </div>
      </div>

      <div class="flex items-start gap-x-3 group">
        <NuxtImg
          src="/icon/footer/2.png"
          alt="Phone Icon"
          class="w-5 h-5 mt-0.5 object-contain shrink-0"
          width="20"
          height="20"
        />
        <div class="flex flex-col">
          <span class="text-white font-semibold text-sm md:text-base">Telepon</span>
          <a
            href="tel:+6281234567890"
            class="text-white/80 text-sm md:text-base hover:text-white transition-colors duration-300 mt-0.5"
          >
            +62 812-3456-7890
          </a>
        </div>
      </div>

      <div class="flex items-start gap-x-3">
        <NuxtImg
          src="/icon/footer/3.png"
          alt="Location Icon"
          class="w-5 h-5 mt-0.5 object-contain shrink-0"
          width="20"
          height="20"
        />
        <div class="flex flex-col">
          <span class="text-white font-semibold text-sm md:text-base">Alamat</span>
          <p class="text-white/80 text-sm md:text-base mt-0.5 leading-relaxed">
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
