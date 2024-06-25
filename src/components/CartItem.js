import React from 'react';

const CartItem = ({ item, removeFromCart }) => (
  <div className="cart-item">
    <h4>{item.name}</h4>
    <p>Quantity: {item.quantity}</p>

    <p>Total: {item.price} USDT</p>
    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
);

export default CartItem;
