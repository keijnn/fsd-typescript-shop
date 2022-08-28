import { Button } from '@/shared/ui/button'
import { productAdded } from '../model'

//types
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
