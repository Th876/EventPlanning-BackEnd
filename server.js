// Do all requires
// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');

// Set up environment: require dotenv & load .env info into node environment
require('dotenv').config();

// Set up server
const app = express();

//Declare variables
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;

//set app to listen to port & include a console.log() to tell when your server is running
app.listen(port, () => {
    console.log(`Listening on port, ${port}`);
});