import { useContext } from "react";
import { Context } from "../context/Context";

function CartItem({ game }) {
  const { removeFromCart, addToCart } = useContext(Context);

  // function decrement() {
  //     setCounter(counter => counter >= 1 ? counter - 1 : counter)
  // }

  return (
    <div className="cart-items">
      <div className="cart-image-box">
        <img src={game.background_image} style={{ height: "120px" }} />
      </div>
      <div className="cart-item-info">
        <h1 className="cart-item-title">{game.name}</h1>
        <h3 className="cart-item-subtitle">Release Date: {game.released}</h3>
        <h3 className="cart-item-subtitle">Genre: {game.genres[0].name}</h3>
      </div>
      <div className="cart-item-counter">
        <div
          onClick={() => removeFromCart(game)}
          className="change-item-count-btn"
        >
          -
        </div>
        <div className="game-count">{game.count}</div>
        <div onClick={() => addToCart(game)} className="change-item-count-btn">
          +
        </div>
      </div>
      <div className="game-item-prices">
        <div className="game-item-price">${game.price}</div>
        <div
          onClick={() => removeFromCart(game.id)}
          className="remove-cart-item"
        >
          <u>Remove</u>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
