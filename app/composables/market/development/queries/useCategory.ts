import { useQuery } from "@pinia/colada";
import type { CategoryResponse } from "~~/types/market/development/ProductCategory";

export const useCategories = () => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useQuery<CategoryResponse>({
    key: () => ["categories"],
    query: async () => {
      return await $fetch<CategoryResponse>(`/product/category`, {
        baseURL: apiBaseUrl,
        params: {
          page: 1,
          limit: 100,
          sort: "createdAt",
          order: "asc",
        },
      });
    },
  });
};
