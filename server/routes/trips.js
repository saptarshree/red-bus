const express = require('express');
const router = express.Router();
const Trips = require('../models/trips schema');

router.post("/trips", async (req, res) => {
    try {
        const data = req.body;
        const resp = await Trips.create(data);
        return res.status(200).json(resp);
    } catch (error) {
        return res.status(500).send(error);
    }
});

router.get("/trips", async (req, res) => {
    try {
        const { from, to, date, arrival, departure, startRating, endRating, operators } = req.query;
        let query = {};

        if (from) {
            query.from = from;
        }
        if (to) {
            query.to = to;
        }

        if (date) {
            query.date = date;
        }

        if (arrival) {
            query.arrival = arrival;
        }
        if (departure) {
            query.departure = departure;
        }

        if (startRating !== undefined && endRating !== undefined) {
            query.rating = { $gte: startRating, $lte: endRating };
        } else if (startRating !== undefined) {
            query.rating = { $gte: startRating };
        } else if (endRating !== undefined) {
            query.rating = { $lte: endRating };
        }

        if (operators) {
            query.operators = operators;
        }

        const resp = await Trips.find(query).limit(50);
        return res.status(200).json({ resp });
    } catch (error) {
        return res.status(500).send(error);
    }
});

module.exports = router;
