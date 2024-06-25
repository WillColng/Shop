// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
import { products } from '../data';
import { Grid } from '@mui/material';

const ProductList = ({ addToCart }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductItem product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
