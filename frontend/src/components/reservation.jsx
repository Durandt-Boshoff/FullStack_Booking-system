import { useEffect, useState } from "react";

function Reservation() {
    const [selectedRoom, setSelectedRoom] = useState("gaming-room");
    const [selectedDate, setSelectedDate] = useState(
        new Date().toLocaleDateString("en-CA")
    );
    const [reservation, setReservation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState("");

    useEffect(() => {
        const fetchReservations = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await fetch(
                    `http://localhost:3000/api/bookings/${selectedDate}/${selectedRoom}`
                );

                if (!response.ok) {
                    throw new Error("Could not load reservations.");
                }

                const data = await response.json();
                setReservation(data);
            } catch (error) {
                setError(error.message);
                setReservation([]);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, [selectedRoom, selectedDate]);

    const handleCancle = async (bookingId) => {
        const confirmed = window.confirm(
            "Are you sure you want to cancle this reservation?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:3000/api/bookings/${bookingId}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Could not cancle this reservation.");
            }

            setReservation((currentReservation) => 
                currentReservation.filter(
                    (reservation) => reservation.id !== bookingId
                )
            );
        } catch (error) {
            setError(error.message);
        };
    }

    return (
        <section className="min-h-screen bg-background px-6 py-20 md:px-12">
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <span className="rounded-full bg-primary-accent/30 px-4 py-2 text-sm font-medium text-text">
                        Your Booking
                    </span>

                    <h1 className="mt-5 text-3xl font-semibold text-text sm:text-4xl md:text-5xl">
                        My Reservation
                    </h1>

                    <p className="mt-4 text-text/80">
                        View confirmed bookings for your selected room and date.
                    </p>
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="reservation-room"
                        className="mb-2 block font-semibold text-text"
                    >
                        Select Room
                    </label>

                    <select
                        id="reservation-room"
                        value={selectedRoom}
                        onChange={(event) => setSelectedRoom(event.target.value)}
                        className="w-full rounded-xl border border-primary-accent/60 bg-white p-3 text-text md:max-w-sm"
                    >
                        <option value="gaming-room">Gaming Room</option>
                        <option value="streaming-room">Streaming Room</option>
                        <option value="creation-room">Creation Room</option>
                    </select>
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="reservation-date"
                        className="mb-2 block font-semibold text-text"
                    >
                        Select Date
                    </label>

                    <input
                        id="reservation-date"
                        value={selectedDate}
                        min={new Date().toLocaleDateString("en-CA")}
                        onChange={(event) => setSelectedDate(event.target.value)}
                        className="w-full rounded-xl border border-primary-accent/60 bg-white p-3 text-text md:max-w-sm"
                    />
                </div>

                <div className="space-y-4">
                    {loading && (
                        <p className="text-center text-text">Loading reservations...</p>
                    )}

                    {error && (
                        <p className="text-center text-red-600">{error}</p>
                    )}

                    {!loading && !error && reservation.length === 0 && (
                        <p className="rounded-xl bg-white p-6 text-center text-text/70">
                            No reservations found for this room and date.
                        </p>
                    )}

                    {!loading && reservation.map((reservation) => (
                        <div
                            key={reservation.id}
                            className="rounded-2xl border border-primary-accent/50 bg-white p-6 shadow-sm"
                        >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-text">
                                        {reservation.name}
                                    </h2>

                                    <p className="mt-1 text-text/70">
                                        {reservation.email}
                                    </p>

                                    <p className="mt-2 text-text">
                                        {reservation.time}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="w-fit rounded-full bg-primary-accent/30 px-3 py-1 text-sm font-medium text-text">
                                        {reservation.status}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => handleCancle(reservation.id)}
                                        className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                    >
                                        Cancel Reservation
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reservation;