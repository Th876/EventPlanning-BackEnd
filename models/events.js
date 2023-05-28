// require mongoose
const mongoose = require('mongoose');

// define mongoose schema
const eventSchema = new mongoose.Schema({
    eventName: {
    type: String,
    required: true,
    },

    clientName : {
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
    dressCode: String,
    cuisine: String,
    notes: String,
    complete: Boolean,
});

// Create mongoose model
const Events = mongoose.model('Event', eventSchema);

// Export model
module.exports = Events;