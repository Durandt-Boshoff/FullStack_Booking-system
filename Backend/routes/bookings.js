const express = require('express');
const bookings = require('../data/bookings');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, resource, date, time } = req.body;

    const today = new Date();
    const selectedDate = new Date(`${date}T00:00:00`);

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        return res.status(400).json({ message: "The past can't be changed, but the future can."})
    }

    const now = new Date();
    const selectedDateTime = new Date(`${date}T${time}:00`);

    if (selectedDateTime < now) {
        return res.status(400).json({ message: "That hour has pass, but the next one is just around the corner."})
    }

    if (!name || !email || !resource || !date || !time) {
        return res.status(400).json({ message: "Please answer all fields." });
    }

    const existingBooking = bookings.some((booking) => {
        return booking.resource === resource && booking.date === date && booking.time === time;
    });

    if (existingBooking) {
        return res.status(409).json({ message: "This slot is already taken." });
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
    res.status(201).json({ 
        message: "Booking made.",
        booking: newBooking
    });
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