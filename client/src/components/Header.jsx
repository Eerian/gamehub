import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/eerian/image/upload/v1667698511/game-hub-high-resolution-logo-color-on-transparent-background_tdfrql.png"
        />
      </Link>
      <Badge className="shopping-cart-badge" badgeContent={0} color="primary">
        {/* <Link to="/cart"><i className={cartBadge}></i></Link> */}
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large" className="shopping-cart-icon" />
        </Link>
      </Badge>
      <nav>
        <div>
          <span>Hi username</span>
          <button>Log out</button>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
