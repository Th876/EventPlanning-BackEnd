// require mongoose
const mongoose = require('mongoose');

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
        type: Date,
        required: true,
    },

    venue: String,
    theme: String,
    numOfGuests: Number,
    budget: Number,
    cuisine: String,
    entertainment: String,
    notes: String,
    isCompleted: Boolean,
});

// Create mongoose model
const Events = mongoose.model('Event', eventSchema);

// Export model
module.exports = Events;