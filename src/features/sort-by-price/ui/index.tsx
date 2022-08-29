import { Button } from '@/shared/ui/button'
import { productsSortedByName } from '../model'

export const SortByPrice = () => (
  <Button
    className="ml-6 px-2"
    label="Sort by price"
    onClick={productsSortedByName}
  />
)
