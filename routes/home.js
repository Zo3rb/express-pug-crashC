// Initiating Home Route End Point
const express = require('express');

// Getting the Products From the Add Endpoint
const { prods } = require('./add');

// Creating new Instance of The Express Router
const router = express.Router();

// Initiating The First End Point
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Cart - Home Page', prods });
});

module.exports = router;
