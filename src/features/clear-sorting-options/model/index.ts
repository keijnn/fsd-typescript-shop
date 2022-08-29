//import modules
import { createEvent, sample } from 'effector'

//import models
import { $filter, $filteredProducts } from '@/features/search-product'
import { $products } from '@/shared/api/products'


export const sortingOptionsCleared = createEvent()

sample({
  clock: sortingOptionsCleared,
  source: $products,
  target: $filteredProducts,
})

$filter.reset(sortingOptionsCleared)
