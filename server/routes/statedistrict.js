const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const StateDistrict= require('../models/StateDistrictSchema')

// GET route to fetch data based on state or district
router.get('/state_district', async (req, res) => {
    try {
      // Retrieve data from MongoDB
      const data = await mongoose.connection.db.collection('state_district').find().toArray();
      
      res.json(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data from MongoDB', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.post('/state_district', async (req, res) => {
    try {
        // Extract data from the request body
        const { state, district } = req.body;

        // Create a new document using the StateDistrict model
        const newStateDistrict = new StateDistrict({
            state,
            district
        });

        // Save the new document to the database
        await newStateDistrict.save();

        res.status(201).json({ message: 'Data added successfully' });
    } catch (error) {
        console.error('Error adding data to MongoDB', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

