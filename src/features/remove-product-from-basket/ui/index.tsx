import { Button } from '@/shared/ui/button'
import { productRemoved } from '../model'

interface RemoveProductProps {
  index: number
}

export const RemoveProductFromBasket = ({ index }: RemoveProductProps) => (
  <Button onClick={() => productRemoved(index)} label="Remove from basket" />
)
