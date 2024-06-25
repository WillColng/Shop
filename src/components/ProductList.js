import React from 'react';
import ProductItem from './ProductItem';
import products from '../data';

const ProductList = ({ addToCart }) => (
  <div>
    {products.map(product => (
      <ProductItem key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductList;
