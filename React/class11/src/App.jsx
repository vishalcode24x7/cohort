import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Navbar from './pages/Navbar'
import Men from './pages/Men'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <About />} />
        <Route path='/about/:id' element={ <About />} />
        <Route path='/product' element={ <Products />} />
        <Route path='/product/men' element={ <Men />} />
        <Route path='/*' element={<Notfound />}/>
      </Routes>
    </div>
  )
}

export default App
