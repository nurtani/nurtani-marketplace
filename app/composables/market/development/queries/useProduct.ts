import { useQuery } from '@pinia/colada'
import type {
  ProductListResponse,
  ProductFilter
} from '~/../../types/market/development/MarketProduct'

export const useProducts = (filters: Ref<ProductFilter> = ref({})) => {
  const {
    public: { apiBaseUrl }
  } = useRuntimeConfig() // Access API base URL defined in nuxt.config.ts runtimeConfig.public

  return useQuery<ProductListResponse>({
    key: () => ['products', filters.value],
    query: async () => {
      const params = {
        page: filters.value.page ?? 1,
        limit: filters.value.limit ?? 10,
        sort: filters.value.sort ?? 'createdAt',
        order: filters.value.order ?? 'asc',
        ...(filters.value.search && { search: filters.value.search }),
        // ✅ filter category 'semua' jangan dikirim
        ...(filters.value.category
          && filters.value.category !== 'semua' && {
          category: filters.value.category
        }),
        ...(filters.value.status && { status: filters.value.status }),
        ...(filters.value.location && { location: filters.value.location }),
        ...(filters.value.minPrice && { minPrice: filters.value.minPrice }),
        ...(filters.value.maxPrice && { maxPrice: filters.value.maxPrice })
      }

      console.log('🔍 Params dikirim ke API:', params) // ✅ taruh di sini

      const data = await $fetch<ProductListResponse>(`/market/products`, {
        baseURL: apiBaseUrl,
        params
      })
      return data
    }
  })
}
