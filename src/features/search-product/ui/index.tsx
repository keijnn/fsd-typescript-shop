import { Input } from "@/shared/ui/input";
import { productsFiltered } from "../model";

export const SearchProduct = () => (
  <Input
    className="mb-4"
    onChange={(e) => productsFiltered(e.target.value)}
    label="Search product..."
  />
)