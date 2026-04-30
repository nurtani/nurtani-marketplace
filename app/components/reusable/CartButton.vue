<template>
  <Transition name="cart-fade">
    <button
      v-if="cartVisible"
      :style="{
        bottom: `calc(${bottomOffset} + env(safe-area-inset-bottom))`,
      }"
      class="fixed right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#1A4F32] rounded-full shadow-[0_8px_24px_rgba(26,79,50,0.4)] hover:bg-[#143C25] active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label="Buka Keranjang"
      @click="$emit('click')"
    >
      <NuxtImg
        src="/icon/product/cart.png"
        alt="Ikon Keranjang"
        width="24"
        height="24"
        class="object-contain"
      />

      <!-- Badge Counter -->
      <Transition name="badge-pop">
        <span
          v-if="uniqueItemCount > 0"
          class="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center leading-none"
        >
          {{ uniqueItemCount > 99 ? "99+" : uniqueItemCount }}
        </span>
      </Transition>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { useFloatingElement } from "@/composables/component/useFloatingElement";
import { useCartStore } from "~/composables/store/cart"; // sesuaikan path store kamu

defineEmits(["click"]);

const { bottomOffset, cartVisible, updateOffsetFooterOnly } =
  useFloatingElement();
const cartStore = useCartStore();
const uniqueItemCount = computed(() => cartStore.uniqueItemCount);

const handleUpdate = () => {
  const footerEl = document.querySelector("footer") as HTMLElement | null;
  updateOffsetFooterOnly(footerEl);
};

onMounted(() => {
  requestAnimationFrame(() => requestAnimationFrame(handleUpdate));
  window.addEventListener("scroll", handleUpdate, { passive: true });
  window.addEventListener("resize", handleUpdate, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleUpdate);
  window.removeEventListener("resize", handleUpdate);
});
</script>

<style scoped>
/* Animasi muncul badge */
.badge-pop-enter-active {
  animation: pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.badge-pop-leave-active {
  animation: pop 0.2s ease-in reverse;
}
@keyframes pop {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
