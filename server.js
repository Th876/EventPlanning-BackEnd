// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');
// Set up environment: require dotenv & load .env info into node environment
require('dotenv').config();

// Set up server
const app = express();

//Declare variables
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

// Routes

// seeding database

//Connect to mongoDB
const launchMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, 
        useUnifiedTopology: true
        });
        mongoose.connection.once('open', ()=> {
                console.log('connected to mongo');
            });
//set app to listen to port & include a console.log() to tell when your server is running
        app.listen(PORT, () => {
        console.log(`Listening on port, ${PORT}`);  
        });
    } catch (err) {
        console.log(err.message);
    }
};

launchMongoose();