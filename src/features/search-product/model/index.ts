import { $products } from '@/shared/api/products'
import { createEvent, sample } from 'effector'

export const productsFiltered = createEvent<string>()

export const $filteredProducts = $products.map((product) => product)

sample({
  clock: productsFiltered,
  source: { products: $products },
  fn: ({ products }, value) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    ),
  target: $filteredProducts,
})



