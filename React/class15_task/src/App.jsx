import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Products from './Pages/Products'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<ProductDetails />} />
    </Routes>
  )
}

export default App
