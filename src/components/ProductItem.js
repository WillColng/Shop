import React, { useState } from 'react';

const priceOptions = {
  3: 30,
  5: 47,
  20: 190,
  50: 450,
  100: 870,
  300: 2500,
  500: 4000,
  1000: 7800
};

const ProductItem = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(3);

  const handleAddToCart = () => {
    const price = priceOptions[quantity];
    addToCart({ ...product, price }, quantity);
  };

  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={300}>300</option>
        <option value={500}>500</option>
        <option value={1000}>1000</option>
      </select>
      <p>Price: {priceOptions[quantity]} USDT</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
