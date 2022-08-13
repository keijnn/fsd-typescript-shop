import './App.css'
import { $products } from '@/features/api'
import { productAdded } from '@/features/products'

import { useList } from 'effector-react'

export const App = () => {
  const products = useList($products, (product) => (
    <div className="product">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt="img" />
      <h2 onClick={() => productAdded(product.title)}>{product.price}</h2>
    </div>
  ))

  return <div className="App">{products}</div>
}
