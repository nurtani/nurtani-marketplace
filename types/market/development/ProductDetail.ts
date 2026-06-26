import type { Category, Price, Farmer, ProductStatus } from './MarketProduct'

export interface DetailProduct {
  id: string
  name: string
  category: Category
  price: Price
  unit: string
  availableStock: number
  status: ProductStatus
  location: string
  imageUrls: string[]
  greenPoint: number
  features: string[]
  description: string
  plantedAt: string
  harvestedAt: string
  farmer: Farmer
  createdAt: string
  updatedAt: string
}

export interface ProductDetailResponse {
  message: string
  data: DetailProduct
}
