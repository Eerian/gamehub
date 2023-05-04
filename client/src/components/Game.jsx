import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom'
import { Context } from '../context/Context'

function Game({ game }) {
  const { addToCart } = useContext(Context)

  return (
    <div className="game-card">
      <a href={`/game/${game.id}`}>
        <img src={game.background_image} className="game-image"></img>
      </a>
      <h4 className="game-title">{game.name}</h4>
      <div className="game-price">{`Price: $${game.price}`}</div>
      <div className="add-to-cart-btn">
        <Button
          size="small"
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => addToCart(game)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default Game
