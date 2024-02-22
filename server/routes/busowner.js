const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Bus= require('../models/busownerschema')
// GET route to fetch data from the 'bus_owner' collection


// GET route to fetch data from the 'bus_owner' collection
router.get('/bus_owners', async (req, res) => {
    try {
        // Retrieve data from the 'bus_owner' collection using MongoDB driver
        const data = await mongoose.connection.db.collection('bus_owner').find().toArray();

        if (data.length === 0) {
            // If no data found, return a 404 Not Found response
            return res.status(404).json({ error: 'No data found' });
        }

        res.json(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from MongoDB', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// POST route to add a new bus
router.post('/bus_owners', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, totalSeats, rating, amenities } = req.body;

        // Create a new instance of the Bus model
        const newBus = new Bus({
            name,
            totalSeats,
            rating,
            amenities
        });

        // Save the new bus instance to the database
        await newBus.save();

        res.status(201).json({ message: 'Bus added successfully', bus: newBus });
    } catch (error) {
        console.error('Error adding bus to MongoDB', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
