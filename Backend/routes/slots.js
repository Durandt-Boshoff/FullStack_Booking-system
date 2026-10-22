const express = require('express');
const bookings = require('../data/bookings');
const router = express.Router()

const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
]

router.get('/', (req, res) => {
    const { resource, date } = req.query;

    const availableSlots = timeSlots.filter((slot) => {
        return !bookings.some((booking) => {
            return booking.resource === resource && booking.date === date && booking.time === slot;
        });
    });

    res.json(availableSlots);
});

module.exports = router