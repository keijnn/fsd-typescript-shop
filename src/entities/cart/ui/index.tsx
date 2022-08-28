import { ProductCardCart } from "@/entities/product-card"
import { $cart } from '../model'
import { useList } from "effector-react"

export const Cart = () => {
  const productsList = useList($cart, (product, index) => (
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
    <div style={{ maxHeight: 'calc(100% - 64px)' }} className="overflow-auto">
      <div className="p-4 grid grid-cols-1 gap-6">{productsList}</div>
    </div>
  )
}
