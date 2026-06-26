import type { PaginationMeta } from '../development/MarketProduct'

export interface Category {
  id: string
  name: string
}

export interface CategoryResponse {
  message: string
  data: Category[]
  meta: PaginationMeta
}
