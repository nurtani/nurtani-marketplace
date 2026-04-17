// types/market/product.ts

export interface Seller {
  id: string
  name: string
  avatar: string
  location: string
  farmerId: string
  role?: string
  isVerified?: boolean
  stats?: {
    rating?: number
    totalProducts?: number
    totalSales?: number
  }
  social?: {
    instagram?: string
    facebook?: string
    website?: string
  }
  description?: string
  joinedAt?: string
}

export interface ProductHistory {
  id: string
  type: 'penanduran' | 'perawatan' | 'panen'
  title: string
  status?: 'Selesai' | 'Proses' | 'Menunggu'
  date: string
  actor: {
    name: string
    avatar: string
    role?: string
  }
  images?: string[]
  verification?: {
    label: string
    buttonText: string
    url: string
  }
  activity: string
}

export interface ProductCategory {
  id: string
  title: string
  subCategory?: string[]
}

export interface Product {
  id: number
  title: string
  images: string[]
  category: ProductCategory
  rating: number
  reviewCount: number
  isFavorite: boolean
  isVerified: boolean
  location: string
  priceLabel: string
  price: number
  unit: string
  points: number
  seller: Seller
  description: string
  histories: ProductHistory[]
  linkTo?: string
}
