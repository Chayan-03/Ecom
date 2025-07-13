import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import {BrowserRouter} from "react-router-dom";
import { Homepage } from './pages/Homepage.jsx'
import {GetAllProducts} from './api/getAllProducts.jsx'


function App() {
  return(
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/products" element={<GetAllProducts/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
