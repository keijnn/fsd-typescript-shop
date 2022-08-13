import { createStore, createEffect } from 'effector'

interface Products {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

const getProductsFx = createEffect(async () => {
  const req = await fetch('https://dummyjson.com/products')
  if (!req.ok) throw req
  return req.json()
})

export const $products = createStore<Products[]>([]).on(
  getProductsFx.doneData,
  (_, data) => data.products
)

$products.watch((data) => console.log(data))

getProductsFx()
