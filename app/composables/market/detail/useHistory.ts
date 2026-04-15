export const useHistory = () => {
  const getIcon = (type: string) => {
    const map: Record<string, string> = {
      panen: 'scissor',
      penanduran: 'sprout',
      perawatan: 'water'
    }
    return map[type] || 'water'
  }

  const getContainerColor = (type: string) => {
    switch (type) {
      case 'panen':
        return 'bg-green-50'
      case 'penanduran':
        return 'bg-amber-50'
      case 'perawatan':
        return 'bg-blue-50'
      default:
        return 'bg-gray-50'
    }
  }

  const getDotColor = (type: string) => {
    switch (type) {
      case 'panen':
        return 'bg-green-500'
      case 'penanduran':
        return 'bg-amber-600'
      case 'perawatan':
        return 'bg-blue-500'
      default:
        return 'bg-gray-400'
    }
  }

  return { getIcon, getContainerColor, getDotColor }
}
