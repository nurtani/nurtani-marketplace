import { useQuery } from '@pinia/colada'
import type { HistoryProductResponse } from '~~/types/market/development/ProductHistory'

export const useProductHistory = (id: Ref<string> | ComputedRef<string>) => {
  const {
    public: { apiBaseUrl }
  } = useRuntimeConfig()

  return useQuery<HistoryProductResponse>({
    key: () => ['productHistory', id.value],
    query: async () => {
      return await $fetch<HistoryProductResponse>(
        `/market/products/${id.value}/history`,
        {
          baseURL: apiBaseUrl
        }
      )
    },
    enabled: () => !!id.value
  })
}
