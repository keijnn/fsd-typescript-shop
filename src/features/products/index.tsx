import { createStore, createEvent } from 'effector'

interface Product {
  title: string
  count: number
}

export const productAdded = createEvent<string>()

export const $card = createStore<Product[]>([]).on(
  productAdded,
  (products, productTitle) => {
    let modified = false
    const copy = products.map((item) => {
      if (item.title === productTitle) {
        modified = true
        return { ...item, count: item.count + 1 }
      }
      return item
    })
    if (!modified) {
      copy.push({ title: productTitle, count: 1 })
    }
    return copy
  }
)

$card.watch((data) => console.log(data))



