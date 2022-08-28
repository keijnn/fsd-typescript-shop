//import modules
import { useList, useUnit } from 'effector-react'

//import components
import { ProductCardStore } from '@/entities/product-card'
import { SearchProduct } from '@/features/search-product'
import { $filteredProducts } from '@/features/search-product/model'

export const Store = () => {

  const productsList = useList($filteredProducts, (product) => (
    <ProductCardStore
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
      className="overflow-auto p-4"
    >
      <SearchProduct />
      <div className="grid grid-cols-4 gap-6">{productsList}</div>
    </div>
  )
}




