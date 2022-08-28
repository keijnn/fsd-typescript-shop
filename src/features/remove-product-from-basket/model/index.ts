//import modules
import { createEvent } from 'effector'

//import components
import { $cart } from '@/entities/cart'

//import types
import { Product } from '@/shared/api/products'

const dropIndex = (cart: Product[], index: number) =>
  cart.slice(0, index).concat(cart.slice(index + 1))

export const productRemoved = createEvent<number>()

$cart.on(productRemoved, dropIndex)
