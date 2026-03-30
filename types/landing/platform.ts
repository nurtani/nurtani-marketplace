// types/landing/platform.ts

export interface TimelineItem {
  icon: string;
  titleKey: string; // Kita ubah dari 'title' menjadi 'titleKey' untuk i18n
  date: string;
  completed: boolean;
  bgClass: string;
  lineClass: string;
}
