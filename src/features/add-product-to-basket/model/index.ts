//import modules
import { createEvent } from 'effector'

//import components
import { $cart } from '@/entities/cart'

//import types
import { Product } from '@/shared/api/products'

export const productAdded = createEvent<Product>()

$cart.on(productAdded, (cart, product) => {
  let modified = false
  const duplicate:Product[] = cart.map((item) => {
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



