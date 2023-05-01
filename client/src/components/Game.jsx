import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom'
import { Context } from '../Context'

function Game({ game }) {
  const { addToCart } = useContext(Context)

  return (
    <div className="game-card">
      <a href={`/game/${game.id}`}>
        <img src={game.background_image} className="game-image"></img>
      </a>
      <h4>{game.name}</h4>
      <p>{`Price: $${game.price}`}</p>
      {/* <button className="add-to-cart-button"><i class="fa-sharp fa-solid fa-cart-plus"></i>Add To Cart</button> */}
      <Button size="small" variant="contained" onClick={() => addToCart(game)}>
        <AddShoppingCartIcon />
        Add to Cart
      </Button>
      <Link to={`/products/${game.id}`}>more info</Link>
    </div>
  )
}

export default Game
