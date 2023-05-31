// require mongoose
const mongoose = require('mongoose');
// require moment to change date format
const moment = require('moment');
// define mongoose schemata
// const moodBoard = new mongoose.Schema ({
// 
// });


const eventSchema = new mongoose.Schema({
    eventName: {
    type: String,
    required: true,
    },

    clientName : {
        type: String,
        required: true,
    },

    eventType: {
        type: String,
        required: true,
    },

    eventDateTime: {
        type: String,
        default: Date,
        required: true,
        
        
  },

    venue: String,
    theme: String,
    numOfGuests: Number,
    budget: String,
    cuisine: String,
    entertainment: String,
    notes: String,
});

// Create mongoose model
const Events = mongoose.model('Event', eventSchema);

// Export model
module.exports = Events;