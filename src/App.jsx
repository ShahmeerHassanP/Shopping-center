import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Productdetails from './pages/Productdetails'
import Checkout from './pages/Checkout'
import { Auth } from './components/auth'
import { AddProduct } from './components/addProduct'

function App() { 
  

  return (
    <>
    
   
    <Navbar />
    <Routes>
      <Route path='/' element={<Product/>} />
      <Route path='/ProductDetails' element={<Productdetails/>} />
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Admin' element={<AddProduct/>}/>
      
      
    </Routes>
    
    </>
  )
}

export default App
