import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { cartItems } = useContext(Context);
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.count, 0);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <Link to="/">
        <img
          className="logo"
          src="https://res.cloudinary.com/eerian/image/upload/v1667698511/game-hub-high-resolution-logo-color-on-transparent-background_tdfrql.png"
        />
      </Link>
      <Badge
        className="shopping-cart-badge"
        badgeContent={totalItemsInCart}
        color="primary"
      >
        {/* <Link to="/cart"><i className={cartBadge}></i></Link> */}
        <Link to="/cart">
          <ShoppingCartIcon fontSize="large" className="shopping-cart-icon" />
        </Link>
      </Badge>
      <nav>
        {user && (
          <div>
            <span className="username">{`Hi, ${user.username}`}</span>
            <button className="nav-logout-btn" onClick={handleClick}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login" className="nav-login-btn">
              Login
            </Link>
            <Link to="/signup" className="nav-signup-btn">
              Signup
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
