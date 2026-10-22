const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const slotRouter = require('./routes/slots');
const bookingRouter = require('./routes/bookings');

app.use(cors());
app.use(express.json())

app.use('/api/slots', slotRouter);
app.use('/api/bookings', bookingRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});