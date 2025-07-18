import './App.css'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import { Homepage } from './pages/Homepage'
import {GetAllProducts} from './api/getAllProducts'
import {CartProvider} from "./context/cart-context";
import {Cartpage} from "./pages/Cartpage";
import {ProfilePage} from "./pages/ProfilePage";
import {Whishlist} from "./pages/Whishlist";



function App() {
  return(
      <>
          <BrowserRouter>
              <CartProvider>
                  <Routes>
                      <Route path="/" element={<Homepage/>}/>
                      <Route path="/products" element={<GetAllProducts/>}/>
                      <Route path="/cart" element={<Cartpage/>}/>
                      <Route path="/profile" element={<ProfilePage/>}/>
                      <Route path="/whishlist" element={<Whishlist/>}/>
                  </Routes>
              </CartProvider>
          </BrowserRouter>
      </>
  )
}

export default App
