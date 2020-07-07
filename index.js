// Starting The Server File Here (express.j);
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const homeRouter = require('./routes/home');
const { addRouter } = require('./routes/add');

// Initiate an Instance of Express
const app = express();

// Setting The Template Engine For the Project
app.set('view engine', 'pug');

// Using the Statics Files Such as (CSS/JS/Any Vendors)
app.use(express.static(path.join(__dirname, '/public')));

// For Parsing The Incoming Bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Registering My RProject Routers
app.use(homeRouter);
app.use(addRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The Server is Running `));
