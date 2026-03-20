<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(isOpen, (newVal) => {
  if (typeof window !== "undefined") {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 z-50 w-full transition-colors duration-300',
      isScrolled || isOpen
        ? 'bg-[#1A4D2E] text-white shadow-md'
        : 'bg-transparent text-white border-b',
    ]"
  >
    <div
      :class="[
        'relative z-10 w-full flex items-center justify-between px-6 py-4 transition-colors duration-300',
        isOpen ? 'border-b border-white/20' : '',
      ]"
    >
      <LandingNavbarLogo />

      <LandingNavbarMenu />

      <div class="hidden md:flex items-center gap-4">
        <LandingNavbarLanguage />
        <LandingNavbarAuth :is-scrolled="isScrolled" />
      </div>

      <button
        class="md:hidden text-2xl focus:outline-none"
        @click="isOpen = !isOpen"
      >
        <span v-if="!isOpen"><Icon name="gridicons:menu" /></span>
        <span v-else><Icon name="ci:close-md" /></span>
      </button>
    </div>

    <Transition name="slide-down">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full h-screen bg-[#1A4D2E] text-white z-0 flex flex-col px-6 py-8 overflow-y-auto"
      >
        <div class="flex flex-col gap-6 pb-6">
          <LandingNavbarMenu :is-mobile="true" @click="isOpen = false" />
        </div>

        <div class="py-4 mb-6 border-y border-white/20">
          <LandingNavbarLanguage :is-mobile="true" />
        </div>

        <div class="mt-auto pb-32">
          <LandingNavbarAuth :is-mobile="true" :is-scrolled="true" />
        </div>
      </div>
    </Transition>
  </header>
</template>
