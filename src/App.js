// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, option) => {
    const existingItem = cartItems.find((item) => item.id === product.id && item.option.quantity === option.quantity);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id && item.option.quantity === option.quantity
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, option, quantity: 1 }]);
    }
    toast.success('Product added to cart!');
  };

  const incrementQuantity = (productId, optionQuantity) => {
    setCartItems(cartItems.map((item) =>
      item.id === productId && item.option.quantity === optionQuantity
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrementQuantity = (productId, optionQuantity) => {
    setCartItems(cartItems.map((item) =>
      item.id === productId && item.option.quantity === optionQuantity && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeFromCart = (productId, optionQuantity) => {
    setCartItems(cartItems.filter((item) => !(item.id === productId && item.option.quantity === optionQuantity)));
  };

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <NavBar cartItemsCount={cartItemsCount} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
