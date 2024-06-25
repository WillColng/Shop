import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cart, removeFromCart }) => (
  <div className="container">
    <h1>Your Cart</h1>
    <Cart cart={cart} removeFromCart={removeFromCart} />
  </div>
);

export default CartPage;
