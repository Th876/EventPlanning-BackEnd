// Require express
const express = require('express');
//Define routes for app
const router = express.Router();
// Require model to interact with MongoDB
const Events = require('../models/events.js');
const eventsData = require('../utilities/data');

// Index 
//Show initial data
router.get('/', async (req, res) => {
    try {
        await Events.deleteMany({});
        const showSampleEvents = await Events.insertMany(eventsData);
        res.json(showSampleEvents);
    } catch(err) {
        router.post('/', async (req, res) => {
  try {
    const createdTodo = await Todos.create(req.body);
    res.json(createdTodo);
  } catch (err) {
    console.log('Error');
    res.json({error: 'An error occurred'});
  }
});

    }   
});

// Index: Show all the things! 
router.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.find({});
        res.json(foundEvents);
    } catch (err) {
        console.log('Error');
        res.json({error: 'An error occurred'});
    }
});

// New : for React App

// Delete : Get rid of this particular thing! 
router.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Events.findByIdAndRemove(req.params.id);
        res.json(deletedEvents);
    } catch(err) {
        console.log('Error');
        res.json({error: 'An error occurred'});
    }
});

// Update : Update this specific thing with this updated form
router.put('/:id', async (req, res) => {
    try{
        const updatedEvents = await Events.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(updatedEvents);
    } catch(err) {
        console.log('Error');
        res.json({error: 'An error occurred'});
    }
})

// Create : Make a new thing with this filled out form
router.post('/', async(req, res) => {
    try {
        const createdEvents = await Events.create(req.body);
        res.json(createdEvents);
    } catch(err) {
        console.log('Error');
        res.json({error: 'An error occurred'});
    }
})
// Edit : for React App

// Show : Show me this one thing!
router.get('/:id', async (req, res) => {
    try {
    const foundEvents = await Events.findById(req.params.id);
    res.json(foundEvents);
    } catch(err) {
        console.log('Error');
        res.json({error: 'An error occurred'});
    }
})


module.exports = router;