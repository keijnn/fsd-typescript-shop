//import modules
import { useList } from 'effector-react'

//import components
import { $products } from '@/shared/api/products'
import { ProductCard } from '@/entities/product-card'

export const Store = () => {
  const productsList = useList($products, (product) => (
    <ProductCard
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




