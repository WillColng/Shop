// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import { Container, Typography, Button } from '@mui/material';

const Cart = ({ cartItems, incrementQuantity, decrementQuantity, removeFromCart }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.option.price * item.quantity, 0);

  return (
    <Container>
      {cartItems.map((item) => (
        <CartItem
          key={item.id + '-' + item.option.quantity}
          item={item}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <Typography variant="h4" gutterBottom>
        Total Amount: ${totalAmount.toFixed(2)} USDT
      </Typography>
      <Button variant="contained" color="primary" fullWidth>
        Proceed to Payment
      </Button>
    </Container>
  );
};

export default Cart;
