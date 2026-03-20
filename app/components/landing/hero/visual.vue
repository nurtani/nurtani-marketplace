<template>
  <div class="relative w-full">
    <div class="grid grid-cols-2 gap-x-3 md:gap-x-8 items-start w-full">
      <div class="flex flex-col gap-y-3 md:gap-y-6 mt-24">
        <div
          class="grid rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group aspect-[3/4]"
        >
          <NuxtImg
            src="/assets/picture/pakbudi.png"
            alt="Pak Budi - Petani Cabai Organik"
            class="col-start-1 row-start-1 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            format="webp"
            fit="cover"
            preload
          />
          <div
            class="col-start-1 row-start-1 flex flex-col justify-end w-full px-3 md:px-6 pb-12 md:pb-18 text-start text-white bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none z-10"
          >
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              Pak Budi –<br class="md:hidden" />
              Petani
            </p>
            <p class="font-bold text-[15px] md:text-[18px] leading-tight">
              Cabai<br class="md:hidden" />
              Organik
            </p>
          </div>
        </div>

        <div
          class="rounded-2xl md:rounded-3xl p-4 md:p-8 bg-white/12 backdrop-blur-sm text-center border border-white/10 shadow-lg"
        >
          <h3
            class="text-[28px] md:text-[48px] font-extrabold text-white leading-tight"
          >
            10rb+
          </h3>
          <p class="text-[12px] md:text-[16px] text-white font-semibold mt-1">
            Orang Green Flag
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-y-3 md:gap-y-6 mb-24">
        <div
          class="rounded-2xl md:rounded-3xl p-3 md:p-5 bg-white/95 shadow-2xl text-[#1A4D2E]"
        >
          <div class="mb-2 md:mb-4">
            <NuxtImg
              src="/icon/leaf.png"
              alt="leaf"
              class="w-6 h-6 md:w-auto md:h-auto"
            />
          </div>
          <h4 class="text-[14px] md:text-[18px] font-bold leading-tight">
            100% Organik
          </h4>
          <p
            class="text-[12px] md:text-[16px] font-medium text-[#6B7280]/80 mt-2 md:mt-3 leading-relaxed"
          >
            Tumbuh asli berkat<br />
            Petani yang sayang<br />
            alam.
          </p>
        </div>

        <div
          class="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/10 group"
        >
          <NuxtImg
            src="/assets/picture/product.png"
            alt="Organik Sprouts dan Sayuran"
            class="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
            format="webp"
            fit="cover"
            preload
          />
        </div>
      </div>
    </div>
  </div>
</template>
