const mongoose = require('mongoose');

// Define a schema for the data
const state_districtSchema = new mongoose.Schema({
    state: String,
    districts: [String] // Define an array of strings for districts
});

// Create a model using the schema
const state_district = mongoose.model('state_district', state_districtSchema);

module.exports = state_district;
