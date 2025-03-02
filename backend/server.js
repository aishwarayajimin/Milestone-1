// backend/server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Realistic product data
const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro',
    price: 899.9,
    description: 'Experience cutting-edge performance and stunning visuals with the iPhone 14 Pro featuring the A16 Bionic chip and Pro camera system.',
    // If you place an image file named "iphone14pro.jpg" in client/public/images, use:
    image: '/images/iphone14pro.jpg'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22',
    price: 750.88,
    description: 'The Samsung Galaxy S22 offers an immersive AMOLED display, versatile camera system, and powerful performance in one sleek design.',
    image: '/images/galaxys22.jpg'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4',
    price: 120.00,
    description: 'Enjoy industry-leading noise cancellation and superior sound quality with the Sony WH-1000XM4 wireless headphones.',
    image: 'https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-each-other-FDbk_97AAM4'
  }
];

// API endpoint for products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start backend server
app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`);
});
