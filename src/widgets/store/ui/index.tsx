//import modules
import { useList, useUnit } from 'effector-react'

//import components
import { $products } from '@/shared/api/products'
import { ProductCard } from '@/entities/product-card'
import { $basket } from '@/entities/basket'

export const Store = () => {
  const store = useUnit($basket)
  console.log(store)
  const productsList = useList($products, (product) => (
    <ProductCard
      id={product.id}
      title={product.title}
      category={product.category}
      price={product.price}
      className="h-60"
    />
  ))
  return (
    <div
      style={{ maxHeight: 'calc(100% - 64px)' }}
      className="overflow-auto"
    >
      <div className="p-4 grid grid-cols-4 gap-6">{productsList}</div>
    </div>
  )
}




