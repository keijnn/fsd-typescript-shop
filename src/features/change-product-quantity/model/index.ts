import { createEvent } from 'effector'
import { $cart } from '@/entities/cart'
import { Product } from '@/shared/api/products'

const dropItem = (cart: Product[], index: number) =>
  cart.slice(0, index).concat(cart.slice(index + 1))

export const productCountIncremented = createEvent<number>()
export const productCountDecremented = createEvent<number>()

$cart
  .on(productCountIncremented, (cart, id) =>
    cart.map((product) =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    )
  )
  .on(productCountDecremented, (cart, id) => {
    const index = cart.findIndex((product) => product.id === id)

    return cart[index].count === 1
      ? dropItem(cart, index)
      : cart.map((product) =>
          product.id === id ? { ...product, count: product.count - 1 } : product
        )
  })



