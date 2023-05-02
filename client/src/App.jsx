import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Games from "./components/Games";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import GameDetails from "./components/GameDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Games />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/game/:gameId" element={<GameDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
