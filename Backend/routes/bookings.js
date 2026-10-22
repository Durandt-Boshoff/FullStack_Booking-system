const express = require('express');
const bookings = require('../data/bookings');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, resource, date, time } = req.body;

    const existingBooking = bookings.some((booking) => {
        return booking.resource === resource && booking.date === date && booking.time === time;
    });

    if (existingBooking) {
        return res.status(409).json({ message: "This slot is already taken." });
    }

    if (!name || !email || !resource || !date || !time) {
        return res.status(400).json({ message: "Please answer all fields." });
    }

    const highestId = Math.max(0, ...bookings.map((booking) => {
        return booking.id;
    }));

    const newBooking = {
        id: highestId + 1,
        name,
        email,
        resource,
        date,
        time,
        status: "confirmed",
    };

    bookings.push(newBooking);
    res.status(201).json({ message: "Booking made." });
});

router.get('/:date/:resource', (req, res) => {
    const { resource, date } = req.params;

    const confirmedBookings = bookings.filter((booking) => {
        return booking.resource === resource && booking.date === date && booking.status === "confirmed";
    });

    res.json(confirmedBookings);
});

router.delete('/:id', (req, res) => {
    const bookingIndex = bookings.findIndex(u => u.id === parseInt(req.params.id));
    if (bookingIndex === -1) {
        return res.status(404).json({ message: "Booking does not exist" });
    }
    
    const deleteBooking = bookings.splice(bookingIndex, 1);
    res.status(200).json({ message: "Booking deleted successfully", Booking: deleteBooking[0]});
});

module.exports = router;