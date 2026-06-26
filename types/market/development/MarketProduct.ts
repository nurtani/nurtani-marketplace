export interface Category {
  id: string
  name: string
}

export type Currency = 'IDR'

export type ProductStatus = 'available' | 'out of stock'

export interface Price {
  raw: number
  formatted: string
  currency: Currency
}

export interface Farmer {
  id: string
  name: string
  location: string
  avatar?: string
}

export interface Product {
  id: string
  name: string
  category: Category
  price: Price
  unit: string
  availableStock: number
  status: ProductStatus
  location: string
  imageUrl: string
  greenPoint: number
  farmer: Farmer
  updatedAt: string
}

export interface PaginationMeta {
  page: number
  limit: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
  totalData: number
}

export interface ProductListResponse {
  message: string
  data: Product[]
  meta: PaginationMeta
}

export interface ProductFilter {
  page?: number
  limit?: number
  sort?: string
  order?: 'asc' | 'desc'
  search?: string
  category?: string
  status?: ProductStatus
  location?: string
  minPrice?: number
  maxPrice?: number
}
export interface CartItem {
  cartItemId: string | number
  product: Product
  quantity: number
}
