//import components
import { Button } from '@/shared/ui/button'

//import models
import { productsSortedByName } from '../model'

export const SortByPrice = () => (
  <Button
    className="ml-6"
    label="Sort by price"
    onClick={productsSortedByName}
  />
)
