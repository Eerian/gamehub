import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Games from './components/Games'
import Cart from './components/Cart'
import Footer from './components/Footer'
import GameDetails from './components/GameDetails'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Games />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/game/:gameId" element={<GameDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
