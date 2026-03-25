<template>
  <section
    class="relative w-full min-h-screen bg-cover bg-center flex items-center"
  >
    <div
      class="absolute inset-0"
      style="
        background: linear-gradient(
          to right,
          #004f3b 0%,
          #006045 50%,
          #0d542b 100%
        );
      "
    ></div>
    <div
      class="absolute inset-0 bg-[url('/assets/backgrounds/hero.png')] bg-cover bg-center opacity-30"
    ></div>

    <div
      class="relative z-10 container mx-auto lg:px-6 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
      style="padding: 102px 24px 35px 24px"
    >
      <LandingHeroTypography />
      <LandingHeroVisual />
    </div>
  </section>
</template>
