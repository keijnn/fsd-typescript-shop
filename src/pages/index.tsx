//import modules
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

//import components
import { Shop } from './shop'
import { Basket } from './basket'
import { PageNotFound } from './not-found'
import { Header } from '@/widgets/header'

export const Routing = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="shop" element={<Shop />} />
      <Route path="basket" element={<Basket />} />
      <Route path="404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to={'404'} />} />
      <Route path="/" element={<Navigate to={'shop'} />} />
    </Routes>
  </BrowserRouter>
)
