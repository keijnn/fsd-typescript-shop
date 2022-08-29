//import modules
import { createEffect, restore } from "effector"

//import types
import { Product } from "./types"

export const getProductsFx = createEffect(async () => {
    const url = 'https://fakestoreapi.com/products'
    const request = await fetch(url)
    if (!request.ok) throw request
    return request.json()
})

export const $products = restore<Product[]>(getProductsFx, [])

getProductsFx()