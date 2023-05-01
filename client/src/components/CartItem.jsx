import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function CartItem({ game }) {
  const { removeFromCart, addToCart, setCartItems } = useContext(Context)

  // function decrement() {
  //     setCounter(counter => counter >= 1 ? counter - 1 : counter)
  // }

  return (
    <div className="cart-items">
      <div className="image-box">
        <img src={game.background_image} style={{ height: '120px' }} />
      </div>
      <div className="about">
        <h1 className="title">{game.name}</h1>
        <h3 className="subtitle">Release Date: {game.released}</h3>
        <h3 className="subtitle">Genre: {game.genres[0].name}</h3>
      </div>
      <div className="counter">
        <div onClick={() => removeFromCart(game)} className="btn">
          -
        </div>
        <div className="count">{game.count}</div>
        <div onClick={() => addToCart(game)} className="btn">
          +
        </div>
      </div>
      <div className="prices">
        <div className="amount">${game.price}</div>
        <div className="save">
          <u>Save for later</u>
        </div>
        <div onClick={() => removeFromCart(game.id)} className="remove">
          <u>Remove</u>
        </div>
      </div>
    </div>
  )
}

export default CartItem
