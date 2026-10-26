import { useEffect, useState } from "react";

function Booking() {
    const [selectedRoom, setSelectedRoom] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [slotError, setSlotError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bookingMessage, setBookingMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

        const handleBooking = async (event) => {
        event.preventDefault();

        if (!selectedRoom || !selectedDate || !selectedTime) {
            setBookingMessage("Please select a room, date, and time.");
            return;
        }

        setSubmitting(true);
        setBookingMessage("");

        try {
            const response = await fetch("http://localhost:3000/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    resource: selectedRoom,
                    date: selectedDate,
                    time: selectedTime,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Booking failed. Please try again.");
            }

            setBookingMessage("Your session is booked! See you at Save Point Studio. 🖥️");

            setName("");
            setEmail("");
            setSelectedTime("");

            const slotsResponse = await fetch(
                `http://localhost:3000/api/slots?resource=${encodeURIComponent(selectedRoom)}&date=${encodeURIComponent(selectedDate)}`
            );

            if (slotsResponse.ok) {
                const slotsData = await slotsResponse.json();
                setAvailableSlots(slotsData);
            }
        } catch (error) {
            setBookingMessage(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (!selectedRoom || !selectedDate) {
            setAvailableSlots([]);
            setSelectedTime("");
            return;
        }

        const fetchSlots = async () => {
            setLoadingSlots(true);
            setSlotError("");
            setSelectedTime("");

            try {
                const response = await fetch(
                    `http://localhost:3000/api/slots?resource=${encodeURIComponent(selectedRoom)}&date=${encodeURIComponent(selectedDate)}`
                );

                if (!response.ok) {
                    throw new Error("Could not load available times.");
                }

                const data = await response.json();
                setAvailableSlots(data);
            } catch (error) {
                setSlotError(error.message);
                setAvailableSlots([]);
            } finally {
                setLoadingSlots(false);
            }
        };

        fetchSlots();
    }, [selectedRoom, selectedDate]);

    return (
        <section
            id="booking"
            className="bg-background px-6 py-20 md:px-12"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <span className="rounded-full bg-primary-accent/30 px-4 py-2 text-sm font-medium text-text">
                        BOOK YOUR SESSION
                    </span>
                    <h2 className='mt-5 text-3xl font-semibold text-text sm:text-4xl md:text-5xl'>
                        Ready to Play, Create, or Stream?
                    </h2>
                    <p className="mt-4 text-text/80">
                        Choose your experience, select a date and time, and reserve your space.
                    </p>
                    <form onSubmit={handleBooking}>
                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold text-text">
                                Choose Your Experience
                            </h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <button
                                    type="button"
                                    onClick={() => setSelectedRoom("gaming-room")}
                                    className={`rounded-2xl border-2 p-5 text-left transition hover:border-cards hover:shadow-lg ${ selectedRoom === "gaming-room"
                                        ? "border-cards bg-primary-accent/30"
                                        : "border-primary-accent/40 bg-background"
                                    }`}
                                >
                                    <h4 className="text-lg font-semibold text-text">
                                        Gaming Room
                                    </h4>

                                    <p className="mt-2 text-sm text-text/80">
                                        Jump into your favourite games and enjoy your session.
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setSelectedRoom("streaming-room")}
                                    className={`rounded-2xl border-2 p-5 text-left transition hover:border-cards hover:shadow-lg ${ selectedRoom === "streaming-room"
                                        ? "border-cards bg-primary-accent/30"
                                        : "border-primary-accent/40 bg-background"
                                    }`}
                                >
                                    <h4 className="text-lg font-semibold text-text">
                                        Streaming Room
                                    </h4>

                                    <p className="mt-2 text-sm text-text/80">
                                        Keep the talks going and the watchers entertained.
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setSelectedRoom("creation-room")}
                                    className={`rounded-2xl border-2 p-5 text-left transition hover:border-cards hover:shadow-lg ${ selectedRoom === "creation-room"
                                        ? "border-cards bg-primary-accent/30"
                                        : "border-primary-accent/40 bg-background"
                                    }`}
                                >
                                    <h4 className="text-lg font-semibold text-text">
                                        Creating Room
                                    </h4>

                                    <p className="mt-2 text-sm text-text/80">
                                        Keep designing and bring your creations to life.
                                    </p>
                                </button>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label
                                htmlFor="booking-date"
                                className="mb-2 block text-lg font-semibold text-text"
                            >
                                Choose Your Date
                            </label>

                            <input
                                id="booking-date"
                                type="date"
                                value={selectedDate}
                                onChange={(event) => setSelectedDate(event.target.value)}
                                min={new Date().toLocaleDateString("en-CA")}
                                className="w-full rounded-xl border border-primary-accent/60 bg-white p-3 text-text outline-none focus:border-cards md:max-w-sm"
                            />
                        </div>

                        <div className="mb-8">
                            <h3 className="mb-4 text-lg font-semibold text-text">
                                Choose Your Time
                            </h3>

                            {!selectedRoom || !selectedDate ? (
                                <p className="text-text/70">
                                    Select a room and a date to see available time.
                                </p>
                            ) : loadingSlots ? (
                                <p className="text-text/70">Finding available times...</p>
                            ) : slotError ? (
                                <p className="text-red-700">{slotError}</p>
                            ) : availableSlots.length === 0 ? (
                                <p className="text-text/70">
                                    No available times for this date. Try another date.
                                </p>
                            ) : (
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {availableSlots.map((time) => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`rounded-xl border-2 p-3 font-medium transition ${
                                                selectedTime === time
                                                    ? "border-cards bg-primary-accent/30 text-text"
                                                    : "border-primary-accent/40 bg-white text-text hover:border-cards"
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="customer-name"
                                    className="mb-2 block font-semibold text-text"
                                >
                                    Your Name
                                </label>

                                <input
                                    id="customer-name"
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full rounded-xl border border-primary-accent/60 bg-white p-3 text-text outline-none focus:border-cards"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="customer-email"
                                    className="mb-2 block font-semibold text-text"
                                >
                                    Email Address
                                </label>

                                <input
                                    id="customer-email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full rounded-xl border border-primary-accent/60 bg-white p-3 text-text outline-none focus:border-cards"
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full rounded-xl bg-cards px-6 py-4 font-semibold text-white transition hover:bg-cards/90 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {submitting ? "Booking Your Session..." : "Confirm Booking"}
                            </button>

                            {bookingMessage && (
                                <p
                                    role="status"
                                    className="mt-4 text-center font-medium text-text"
                                >
                                    {bookingMessage}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Booking;