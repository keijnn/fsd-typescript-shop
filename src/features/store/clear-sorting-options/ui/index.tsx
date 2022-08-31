//import components
import { Button } from '@/shared/ui/button'

//import models
import { sortingOptionsCleared } from '../model'

export const ClearSortingOptions = () => (
  <Button
    className="ml-4"
    onClick={sortingOptionsCleared}
    label="Clear sorting options"
  />
)
