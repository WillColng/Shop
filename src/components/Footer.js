// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        GameBoost
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        Boost your gaming experience with our premium referral services.
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Link href="https://t.me/tweeps_bot/lnk?startapp=taptaprefs" color="inherit" sx={{ mx: 1 }} target="_blank" rel="noopener noreferrer">
          Telegram Shop
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
