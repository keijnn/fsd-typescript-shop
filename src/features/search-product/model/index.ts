import { Product } from '@/shared/api/products';
import { restore } from 'effector';
import { $products } from '@/shared/api/products'
import { createEvent, sample, createStore } from 'effector'

export const productsFiltered = createEvent<string>()

export const $filteredProducts = createStore<Product[]>([])

sample({
  source: $products,
  target: $filteredProducts,
})

export const $filter = restore(productsFiltered, '')

sample({
  clock: productsFiltered,
  source: { products: $products, filter: $filter },
  fn: ({ products, filter }) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    ),
  target: $filteredProducts,
})



