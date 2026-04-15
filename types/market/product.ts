// types/market/product.ts

export interface ProductHistory {
  id: number
  type: 'penanduran' | 'perawatan' | 'panen'
  title: string
  date: string
  farmer: string
  description: string
  digitalVerifyUrl: string
}

export interface Seller {
  name: string
  avatar: string
  location: string
  farmerId: string
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
