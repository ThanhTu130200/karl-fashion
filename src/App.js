import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home/Home'
import ShopPage from './pages/Shop/Shop'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/CheckOut/CheckOut'
import GlobalStyles from './components/GlobalStyles'
import Header from './components/Header/Header'
import SuvHeader from './components/SuvHeader/SuvHeader'
import TopDiscountArea from './components/TopDiscountArea/TopDiscountArea'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Header />
        <SuvHeader />
        <TopDiscountArea />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop-page" element={<ShopPage />} />
          <Route path="/product-details-page" element={<ProductDetails />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/checkout-page" element={<CheckOut />} />
        </Routes>
        <Footer />
      </GlobalStyles>
    </div>
  )
}

export default App
