// Assuming you're using Mongoose
const mongoose = require('mongoose');

// Define the schema for the bus
const BusSchema = new mongoose.Schema({
    name: String,
    totalSeats: Number,
    rating: Number,
    amenities: [String] // Assuming amenities are stored as an array of strings
});

// Create a model from the schema
const Bus = mongoose.model('Bus', BusSchema);

module.exports = Bus;
