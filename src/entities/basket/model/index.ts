//import modules
import { createStore } from "effector";

//import types
import { Product } from "@/shared/api/products";

export const $basket = createStore<Product[]>([])