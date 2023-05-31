// Require express
const express = require('express');

// Require mongoose
const mongoose = require('mongoose');

// require cors
const cors = require('cors');

// Set up environment: require dotenv & load .env info into node environment
require('dotenv').config();

// Require mongoose model for CRUD function
const Events = require('./models/events');

// Require initial sample data for seeding
const eventsData = require('./utilities/data.js');

// Require CRUD logic from the controllers folder
const eventsController = require('./controllers/events');

// Set up server
const app = express();

//Declare variables
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: '*' })) // used to whitelist requests

//Tell server.js to look for req, res that starts with routes '/events' to perform necessary tasks from the controllers file.
app.use('/events', eventsController);


// Seed database. Advised to comment it out, not delete it
// app.get('/seed', async(req, res) => {
    // await Events.deleteMany({});
    // await Events.insertMany(eventsData);
    // res.send('Done!');
// });

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