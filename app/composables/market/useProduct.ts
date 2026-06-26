import { ref, computed } from "vue";
import type { Filters } from "~/../../types/market/FilterOption";
import { useProducts } from "./development/queries/useProduct";
import { sortOptions } from "@/constants/market/sort";
import type { ProductFilter } from "~/../../types/market/development/MarketProduct";

export function useProduct() {
  const isFilterOpen = ref(false);

  const filters = ref<ProductFilter>({
    page: 1,
    limit: 10,
    sort: "createdAt",
    order: "asc",
  });

  const { data, status, error, asyncStatus } = useProducts(filters);

  const products = computed(() => data.value?.data ?? []);
  const meta = computed(() => data.value?.meta);

  const handleFilterChange = (newFilters: Filters) => {
    const selectedSort = sortOptions.find(
      (sortOption) => sortOption.value === newFilters.sortBy,
    );

    filters.value = {
      ...filters.value,
      page: 1,
      sort: selectedSort?.sort ?? "createdAt",
      order: selectedSort?.order ?? "asc",
      search: newFilters.search || undefined,
      category:
        newFilters.category !== "Semua Kategori"
          ? newFilters.category
          : undefined,
      status:
        newFilters.status.length > 0
          ? (newFilters.status[0] as ProductFilter["status"])
          : undefined,
      // ✅ reset minPrice & maxPrice dulu sebelum set yang baru
      minPrice: undefined,
      maxPrice: undefined,
      ...(newFilters.price &&
        newFilters.price !== "semua" &&
        mapPriceRange(newFilters.price)),
    };
  };

  const mapPriceRange = (
    price: string,
  ): Pick<ProductFilter, "minPrice" | "maxPrice"> => {
    const map: Record<string, { minPrice?: number; maxPrice?: number }> = {
      semua: {},
      "0_10000": { minPrice: 0, maxPrice: 10000 },
      "10000_20000": { minPrice: 10000, maxPrice: 20000 },
      "20000_50000": { minPrice: 20000, maxPrice: 50000 },
      "50000_plus": { minPrice: 50000 }, // tanpa maxPrice = tidak ada batas atas
    };
    return map[price] ?? {};
  };

  // Dynamic routing
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const handleSearch = (value: string) => {
    console.log("🔎 handleSearch dipanggil:", value);
    filters.value = {
      ...filters.value,
      search: value,
      page: 1,
    };
  };

  return {
    isFilterOpen,
    filters,
    products,
    meta,
    status,
    asyncStatus,
    error,
    handleFilterChange,
    slugify,
    handleSearch,
  };
}
