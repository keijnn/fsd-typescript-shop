import { ProductCardCart } from "@/entities/product-card"
import { $cart } from '../model'
import { useList, useUnit } from "effector-react"
import { EmptyField } from "@/shared/ui/empty-field"

export const Cart = () => {
  const cart = useUnit($cart)
  const cartList = useList($cart, (product, index) => (
    <ProductCardCart
      id={product.id}
      index={index}
      title={product.title}
      category={product.category}
      price={product.price}
      count={product.count}
      className="h-24"
    />
  ))
  return (
    <div style={{ height: 'calc(100% - 64px)' }} className="overflow-auto">
      {cart.length !== 0 ? (
        <div className="p-4 grid grid-cols-1 gap-6">{cartList}</div>
      ) : (
        <EmptyField className="h-full" />
      )}
    </div>
  )
}
