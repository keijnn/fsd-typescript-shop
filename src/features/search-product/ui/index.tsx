import { Input } from "@/shared/ui/input";
import { useUnit } from "effector-react";
import { $filter, productsFiltered } from "../model";

export const SearchProduct = () => {
  const value = useUnit($filter)
  return (
    <Input
      className="mb-4"
      onChange={(e) => productsFiltered(e.target.value)}
      label="Search product..."
      value={value}
    />
  )
}