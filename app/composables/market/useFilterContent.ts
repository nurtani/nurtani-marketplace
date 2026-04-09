// /composables/market/useFilterContent.ts
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { categories, productStatuses, prices } from '@/constants/market/filter'
import { sortOptions } from '@/constants/market/sort'

export function useFilterContent() {
  const { t } = useI18n()

  const filters = reactive({
    sortBy: 'populer',
    category: 'semua',
    status: [] as string[],
    price: 'semua'
  })

  const categoryOptions = computed(() =>
    categories.map(c => ({
      value: c.value,
      label: t(`filter.categoryOptions.${c.key}`)
    }))
  )

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

  return {
    filters,
    categoryOptions,
    statusOptions,
    priceOptions,
    sortOptionsMapped
  }
}
