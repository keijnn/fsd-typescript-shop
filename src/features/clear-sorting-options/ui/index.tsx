import { Button } from '@/shared/ui/button'
import { sortingOptionsCleared } from '../model'

export const ClearSortingOptions = () => (
  <Button
    className="ml-4 px-2"
    onClick={sortingOptionsCleared}
    label="Clear sorting options"
  />
)
