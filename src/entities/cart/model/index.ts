import { Product } from "@/shared/api/products";
import { createStore } from "effector";

export const $cart = createStore<Product[]>([])