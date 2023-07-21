import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layout/defaultLayout'
import { Home } from './home'
import { Success } from './success'
import { Checkout } from './checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
