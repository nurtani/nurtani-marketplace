import type { IVerifyStatus } from '@/types/verify';

export function getStatusColorClass(name: IVerifyStatus): string {
  switch (name) {
  case 'pending':
    return 'text-yellow-500';
  case 'rejected':
    return 'text-red-500';
  case 'verified':
    return 'text-green-500';
  case 'certified':
    return 'text-blue-500';
  case 'revoked':
    return 'text-stone-500';
  case 'expired':
    return 'text-orange-500';
  default:
    return 'text-gray-400';
  }
}