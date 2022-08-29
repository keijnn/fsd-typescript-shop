import { Button } from "@/shared/ui/button";
import { productsSortedByName } from '../model'

export const SortByName = () => (
  <Button className="ml-6 px-2" label="Sort by name" onClick={productsSortedByName} />
)