import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './App.css';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity, price: item.price + product.price } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
