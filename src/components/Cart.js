import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.price += item.price;
    } else {
      acc.push({ ...item });
    }
    return acc;
  }, []);

  const totalAmount = groupedCart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      {groupedCart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        groupedCart.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
      <h3 className="total-amount">Total Amount: {totalAmount} USDT</h3>
      <p>Transfer to: YOUR_USDT_ADDRESS_HERE</p>
    </div>
  );
};

export default Cart;
