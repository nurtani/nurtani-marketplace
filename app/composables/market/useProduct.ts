import { ref } from 'vue'
import type { Filters } from '~/../../types/market/FilterOption'
import { dummyProduct } from '~/data/market/product'

export function useProduct() {
  const isFilterOpen = ref(false)

  const handleFilterChange = (newFilters: Filters) => {
    console.log('Filter diterapkan:', newFilters)
  }

  // const handleCartClick = () => {
  //   console.log("cart clicked");
  // };

  // Dynamic routing
  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
  }

  const dummyProducts = ref(dummyProduct)

  return {
    isFilterOpen,
    handleFilterChange,
    // handleCartClick,
    slugify,
    dummyProducts
  }
}
