//import modules
import clsx from 'clsx'

//import components
import { AddProductToBasket } from '@/features/add-product-to-basket'

//types
import { ProductProps } from './types'

export const ProductCard = (product: ProductProps) => {
  const { id, title, category, price, count, className } = product
  return (
    <div
      className={clsx(
        'flex text-gray-700 flex-col justify-between items-center rounded-md p-6 bg-gray-300',
        className
      )}
    >
      <h1>{title}</h1>
      <div className="flex justify-between w-full">
        <p>{category}</p>
        <p>{price} $</p>
      </div>
      <AddProductToBasket
        product={product}
      />
    </div>
  )
}


// id = { id }
// title = { title }
// category = { category }
// price = { price }
// count = { count }