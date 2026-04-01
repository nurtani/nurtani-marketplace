import { ref, onMounted, onUnmounted } from "vue";

export function useAutoCarousel(length: number, interval = 3000, offset = 0) {
  const currentIndex = ref(0);
  let timer: ReturnType<typeof setInterval> | null = null;

  onMounted(() => {
    if (length <= 1) return;

    setTimeout(() => {
      timer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % length;
      }, interval);
    }, offset);
  });

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return { currentIndex };
}
