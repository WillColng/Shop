// src/components/NavBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = ({ cartItemsCount }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Reff Shop</Link>
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="cart">
          <Badge badgeContent={cartItemsCount} color="secondary">
            <Link to="/cart" style={{ color: 'inherit' }}>
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
