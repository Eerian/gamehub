import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Games from './components/Games'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Games />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
