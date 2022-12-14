//import modules
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

//import components
import { Shop } from './shop'
import { CartPage } from './cart'
import { PageNotFound } from './not-found'
import { Header } from '@/widgets/header'

export const Routing = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="shop" element={<Shop />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={'404'} />} />
      <Route path="/" element={<Navigate to={'shop'} />} />
    </Routes>
  </BrowserRouter>
)
