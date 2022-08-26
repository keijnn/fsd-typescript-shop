//import modules
import { createEvent } from 'effector'

//import components
import { $basket } from '@/entities/basket'

//import types
import { Product } from '@/shared/api/products'

export const productAdded = createEvent<Product>()

$basket.on(productAdded, (basket, product) => {
  let modified = false
  const duplicate:Product[] = basket.map((item) => {
    if (item.id === product.id) {
      modified = true
      return { ...item, count: item.count + 1 }
    }
    return item
  })
  if (!modified) {
    duplicate.push(product)
  }
  return duplicate
})



