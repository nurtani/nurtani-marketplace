// types/challenge.ts
export interface ChallengeCardProps {
  icon?: string
  title: string
  description: string
  align?: 'left' | 'right' | 'center'
  stagger?: boolean // tambahkan ini
}
