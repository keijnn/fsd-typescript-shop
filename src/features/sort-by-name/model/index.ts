//import modules
import { createEvent, sample } from 'effector'

//import models
import { $filteredProducts } from '@/features/search-product'

export const productsSortedByName = createEvent()

sample({
  clock: productsSortedByName,
  source: { products: $filteredProducts },
  fn: ({ products }) =>
    [...products].sort((a, b) => a.title.localeCompare(b.title)),
  target: $filteredProducts,
})
