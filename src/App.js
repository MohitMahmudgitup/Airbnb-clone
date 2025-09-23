import React from 'react'
import Home from './pages/Home'
import Navber from './components/Navber'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct'
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Navber/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rooms/:id" element={<SingleProduct/>} />
    </Routes>
      <Footer/>
    </div>
  )
}

export default App
