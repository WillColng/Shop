// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <Cart
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default CartPage;
