// /composables/market/useFilterContent.ts
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { productStatuses, prices } from '@/constants/market/filter'
import { sortOptions } from '@/constants/market/sort'
import type { Filters } from '~~/types/market/FilterOption'
import { useCategories } from './development/queries/useCategory'

export function useFilterContent(
  emit: (event: 'filter-change', payload: Filters) => void
) {
  const { t } = useI18n()

  const { data: categoriesData } = useCategories()

  const filters = reactive({
    sortBy: 'populer',
    category: 'semua',
    status: [] as string[],
    price: 'semua',
    search: ''
  })

  watch(
    filters,
    (newFilters) => {
      emit('filter-change', { ...newFilters })
    },
    { deep: true }
  )

  const categoryOptions = computed(() => {
    const apiCategories = categoriesData.value?.data ?? []
    return [
      { value: 'Semua Kategori', label: 'Semua Kategori' },
      ...apiCategories.map(c => ({
        value: c.name,
        label: c.name
      }))
    ]
  })

  const statusOptions = computed(() =>
    productStatuses.map(s => ({
      value: s.value,
      label: t(`filter.statusOptions.${s.key}`)
    }))
  )

  const priceOptions = computed(() =>
    prices.map(p => ({
      value: p.value,
      label: t(`filter.priceOptions.${p.key}`)
    }))
  )

  const sortOptionsMapped = computed(() =>
    sortOptions.map(item => ({
      value: item.value,
      label: t(`filter.sortOptions.${item.key}`)
    }))
  )

  const handleSearch = (value: string) => {
    filters.search = value
  }

  return {
    filters,
    handleSearch,
    categoryOptions,
    statusOptions,
    priceOptions,
    sortOptionsMapped
  }
}
