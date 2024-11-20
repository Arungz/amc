const express = require('express');
const router = express.Router();
const fs = require('fs');

// Mock Database
const products = JSON.parse(fs.readFileSync('./database/products.json', 'utf8'));

// Get all products
router.get('/products', (req, res) => {
    res.json(products);
});

module.exports = router;
