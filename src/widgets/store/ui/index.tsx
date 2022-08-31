//import modules
import { useList, useUnit } from 'effector-react'

//import components
import { ProductCardStore } from '@/entities/product-card'
import { EmptyField } from '@/shared/ui/empty-field'

//import models
import { SearchProduct } from '@/features/store'
import { $filteredProducts } from '@/features/store'
import { SortByName } from '@/features/store'
import { SortByPrice } from '@/features/store'
import { ClearSortingOptions } from '@/features/store'

export const Store = () => {
  const products = useUnit($filteredProducts)
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
    <div style={{ height: 'calc(100% - 64px)' }} className="overflow-auto p-4">
      <SearchProduct />
      <SortByName />
      <SortByPrice />
      <ClearSortingOptions />
      {products.length !== 0 ? (
        <div className="grid grid-cols-4 gap-6">{productsList}</div>
      ) : (
        <EmptyField className="h-[70%]" />
      )}
    </div>
  )
}
