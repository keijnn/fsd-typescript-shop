//import components
import { Button } from '@/shared/ui/button'

//import model
import { productAdded } from '../model'

//import types
import { ProductProps } from '@/entities/product-card'

interface AddProductProps {
  product: ProductProps
}

export const AddProductToBasket = ({ product }: AddProductProps) => (
  <Button
    onClick={() => productAdded({ ...product, count: 1 })}
    label="Add to basket"
  />
)
