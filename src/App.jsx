import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Productdetails from './pages/Productdetails'
import Checkout from './pages/Checkout'

function App() { 
  

  return (
    <>
    
   
    <Navbar />
    <Routes>
      <Route path='/' element={<Product/>} />
      <Route path='/ProductDetails' element={<Productdetails/>} />
      <Route path='/Checkout' element={<Checkout/>} />
    </Routes>
    
    </>
  )
}

export default App
