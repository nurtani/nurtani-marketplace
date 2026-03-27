import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { solutionsData } from "~/data/landing/solution";
import { useSwipe } from "~/composables/landing/useSwipe";

export function useSolutionCarousel() {
  const activeIndex = ref(0);
  const { locale } = useI18n();

  const activeChallenges = computed(() => {
    const currentLang = locale.value as "id" | "en";
    return solutionsData[currentLang] || solutionsData["id"];
  });

  const nextSlide = (): void => {
    if (activeIndex.value < activeChallenges.value.length - 1) {
      activeIndex.value++;
    }
  };

  const prevSlide = (): void => {
    if (activeIndex.value > 0) {
      activeIndex.value--;
    }
  };

  const { handleTouchStart, handleTouchEnd } = useSwipe(nextSlide, prevSlide);

  return {
    activeIndex,
    activeChallenges,
    handleTouchStart,
    handleTouchEnd,
  };
}
