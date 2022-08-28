//import modules
import clsx from 'clsx'

//import components
import { RemoveProductFromBasket } from '@/features/remove-product-from-basket'
import { ChangeProductQuantity } from '@/features/change-product-quantity'
import {
  productCountDecremented,
  productCountIncremented,
} from '@/features/change-product-quantity/model'

//types
import { ProductProps } from '../types'

export const ProductCardCart = (product: ProductProps) => {
  const { title, category, price, count, className } = product
  return (
    <div
      className={clsx(
        'flex text-gray-700 items-center justify-between rounded-md p-6 bg-gray-300',
        className
      )}
    >
      <h1 className="w-64">{title}</h1>
      <div className="flex justify-between w-full">
        <p className="ml-6 w-48">{category}</p>
        <p>{count}</p>
        <div>
          <ChangeProductQuantity
            onClick={() => productCountIncremented(product.id)}
            className="mr-6"
            label="+"
          />
          <ChangeProductQuantity
            onClick={() => productCountDecremented(product.id)}
            label="-"
          />
        </div>
        <p className="mr-6 w-20">{price} $</p>
      </div>
      <RemoveProductFromBasket index={product.index || 0} />
    </div>
  )
}
