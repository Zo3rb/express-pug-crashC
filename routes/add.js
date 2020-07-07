// Initiating Home Route End Point
const express = require('express');

// Creating new Instance of The Express Router
const router = express.Router();

// Creating a Container to Hold The Products Will be Added
const prods = [];

// Crating the Get Request Handling
router.get('/add', (req, res, next) => {
    res.render('add', { title: 'Add Products' });
});

// Crating the Post Request Handling
router.post('/add', (req, res, next) => {
    prods.unshift(req.body);
    res.redirect('/');
});

// Exporting The Container Array & The Router to Register it
module.exports = {
    addRouter: router,
    prods
}
