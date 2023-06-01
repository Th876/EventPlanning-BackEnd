// require mongoose
const mongoose = require('mongoose');
// require moment to change date format
const moment = require('moment');


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
    venue: 
    {
        type: String,
    },
    theme: {
        type: String,
    },

    numOfGuests: {
        type: Number,
    },

    budget: {
        type: String,    
     },

    cuisine: {
        type:String,
    },

    entertainment: {
        type: String,
    },
    notes: {
        type: String,
    }
});

// Create mongoose model
const Events = mongoose.model('Event', eventSchema);

// Export model
module.exports = Events;