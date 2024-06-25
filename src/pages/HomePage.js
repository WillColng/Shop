// src/pages/HomePage.js
import React from 'react';
import ProductList from '../components/ProductList';
import { Container, Typography, Box } from '@mui/material';

const HomePage = ({ addToCart }) => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to GameBoost
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Boost your gaming experience with our premium referral services. Choose from a variety of packages tailored to your needs and level up your game effortlessly.
        </Typography>
      </Box>
      <ProductList addToCart={addToCart} />
    </Container>
  );
};

export default HomePage;
