// constants/landing/platform.ts
import type { TimelineItem } from '~/../../types/landing/platform'

export const timelineData: TimelineItem[] = [
  {
    icon: '/assets/platform/icons/1.png',
    // Menggunakan key dari JSON i18n yang kita buat sebelumnya
    titleKey: 'platform.card.history.content.harvest',
    date: '05 Mar 2026, 14:30',
    completed: true,
    bgClass: 'bg-[#1A4D2E]',
    lineClass: 'bg-gradient-to-b from-[#1A4D2E] to-[#65A361]'
  },
  {
    icon: '/assets/platform/icons/2.png',
    titleKey: 'platform.card.history.content.fertilization',
    date: '20 Feb 2026, 08:15',
    completed: true,
    bgClass: 'bg-[#65A361]',
    lineClass: 'bg-gradient-to-b from-[#65A361] to-[#9DC39A]'
  },
  {
    icon: '/assets/platform/icons/3.png',
    titleKey: 'platform.card.history.content.maintenance',
    date: '10 Feb 2026, 09:00',
    completed: true,
    bgClass: 'bg-[#9DC39A]',
    lineClass: 'bg-gradient-to-b from-[#9DC39A] to-[#CBD5E1]'
  },
  {
    icon: '/assets/platform/icons/4.png',
    titleKey: 'platform.card.history.content.plating', // (Atau planting, jika sudah Anda perbaiki typo-nya)
    date: '01 Feb 2026, 07:00',
    completed: false,
    bgClass: 'bg-[#CBD5E1]',
    lineClass: ''
  }
]
