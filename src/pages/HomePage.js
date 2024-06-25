import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ addToCart }) => (
  <div className="container">
    <h1>Welcome to USDT Shop</h1>
    <ProductList addToCart={addToCart} />
  </div>
);

export default HomePage;