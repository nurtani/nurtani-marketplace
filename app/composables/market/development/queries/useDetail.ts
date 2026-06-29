import { useQuery } from '@pinia/colada'
import type { ProductDetailResponse } from '~~/types/market/development/ProductDetail'

export const useDetailProduct = (id: Ref<string> | ComputedRef<string>) => {
  const {
    public: { apiBaseUrl }
  } = useRuntimeConfig()

  return useQuery<ProductDetailResponse>({
    key: () => ['detailProduct', id.value],
    query: async () => {
      return await $fetch<ProductDetailResponse>(
        `/market/products/${id.value}`,
        {
          baseURL: apiBaseUrl
        }
      )
    },
    enabled: () => !!id.value
  })
}
