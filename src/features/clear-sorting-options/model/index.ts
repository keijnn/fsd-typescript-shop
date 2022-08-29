import { $filter, $filteredProducts } from '@/features/search-product/model'
import { $products } from '@/shared/api/products'
import { createEvent, sample } from 'effector'

export const sortingOptionsCleared = createEvent()

sample({
  clock: sortingOptionsCleared,
  source: $products,
  target: $filteredProducts,
})

$filter.reset(sortingOptionsCleared)
