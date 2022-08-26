import { Button } from "@/shared/ui/button"
import { productAdded } from "../model"

//types
import { ProductProps } from '@/entities/product-card'

interface AddProductProps {
  product: ProductProps
}

export const AddProductToBasket = ({product}: AddProductProps) => {
  return (
    <Button
      onCLick={() => productAdded(product)}
      label="Add to basket"
      className="p-1"
    />
  )
}




