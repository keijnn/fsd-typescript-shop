//import modules
import { useList, useUnit } from 'effector-react'

//import components
import { ProductCardStore } from '@/entities/product-card'
import { SearchProduct } from '@/features/search-product'
import { $filteredProducts } from '@/features/search-product/model'
import { EmptyField } from '@/shared/ui/empty-field'
import { productsSortedByName } from '@/features/sort-by-name/model'
import { SortByName } from '@/features/sort-by-name'
import { SortByPrice } from '@/features/sort-by-price'
import { ClearSortingOptions } from '@/features/clear-sorting-options/ui'

export const Store = () => {
  const prt = useUnit(productsSortedByName)
  console.log(prt)
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
