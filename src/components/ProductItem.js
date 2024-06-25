// src/components/ProductItem.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Select, MenuItem, CardActions } from '@mui/material';

const ProductItem = ({ product, addToCart }) => {
  const [selectedOption, setSelectedOption] = useState(product.options[0]);

  const handleAddToCart = () => {
    addToCart(product, selectedOption);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${selectedOption.price} USDT for {selectedOption.quantity} units
        </Typography>
        <Select
          value={selectedOption.quantity}
          onChange={(e) => {
            const option = product.options.find(opt => opt.quantity === e.target.value);
            setSelectedOption(option);
          }}
          fullWidth
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          {product.options.map((option) => (
            <MenuItem key={option.quantity} value={option.quantity}>
              {option.quantity} units - ${option.price} USDT
            </MenuItem>
          ))}
        </Select>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleAddToCart} fullWidth>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
