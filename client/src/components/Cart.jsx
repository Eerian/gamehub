import React, { useContext } from "react";
import CartItem from "./CartItem";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeAllItems } = useContext(Context);

  const gamesInCart = cartItems.map((item) => (
    <CartItem key={item.id} game={item} />
  ));

  const totalPriceCart = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  // const totalItemsInCart = cartItems.length;
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <main className="cart-container">
      <div className="cart-header">
        <h3 className="cart-heading">Shopping Cart</h3>
        <h5 onClick={removeAllItems} className="remove-all-btn">
          Remove all
        </h5>
      </div>
      <div className="cart-items-list">{gamesInCart}</div>
      {cartItems.length > 0 ? (
        <>
          <hr />
          <div className="checkout">
            <div className="cart-total">
              <div>
                <div className="cart-subtotal">Sub-Total</div>
                <div className="total-cart-items">{totalItemsInCart} Items</div>
              </div>
              <div className="total-cart-amount">${totalPriceCart}</div>
            </div>
            <a href="https://www.paypal.com/signin">
              <button className="checkout-btn">Checkout</button>
            </a>
          </div>
        </>
      ) : (
        <h3 className="no-items-message">No items in the cart</h3>
      )}
    </main>
  );
}

export default Cart;
