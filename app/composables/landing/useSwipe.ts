// composables/useSwipe.ts
import { ref } from "vue";

type SwipeCallback = () => void;

export function useSwipe(
  onSwipeLeft?: SwipeCallback,
  onSwipeRight?: SwipeCallback,
) {
  const touchStartX = ref<number>(0);
  const touchEndX = ref<number>(0);
  const minSwipeDistance: number = 50;

  const handleTouchStart = (e: TouchEvent): void => {
    // Tambahkan '?.' untuk memastikan touch[0] ada,
    // dan '|| 0' sebagai nilai cadangan jika undefined
    touchStartX.value = e.changedTouches[0]?.screenX || 0;
  };

  const handleTouchEnd = (e: TouchEvent): void => {
    touchEndX.value = e.changedTouches[0]?.screenX || 0;
    checkSwipeDirection();
  };

  const checkSwipeDirection = (): void => {
    const swipeDistance = touchStartX.value - touchEndX.value;

    if (swipeDistance > minSwipeDistance) {
      // Sama dengan: if (onSwipeLeft) { onSwipeLeft() }
      onSwipeLeft?.();
    } else if (swipeDistance < -minSwipeDistance) {
      onSwipeRight?.();
    }
  };

  return {
    handleTouchStart,
    handleTouchEnd,
  };
}
