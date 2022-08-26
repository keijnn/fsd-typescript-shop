import { Button } from "@/shared/ui/button"
import { productAdded } from "../model"

//types
import { ProductProps } from '@/entities/product-card'

export const AddProductToBasket = (product: ProductProps) => {
  return (
    <Button
      buttonClicked={() => productAdded(product)}
      label="Add to basket"
      className="p-1"
    />
  )
}




