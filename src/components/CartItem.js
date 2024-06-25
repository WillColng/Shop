// src/components/CartItem.js
import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeFromCart }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.option.price} USDT for {item.option.quantity} units
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quantity: {item.quantity}
        </Typography>
        <IconButton onClick={() => incrementQuantity(item.id, item.option.quantity)}>
          <Add />
        </IconButton>
        <IconButton onClick={() => decrementQuantity(item.id, item.option.quantity)}>
          <Remove />
        </IconButton>
        <IconButton onClick={() => removeFromCart(item.id, item.option.quantity)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItem;
