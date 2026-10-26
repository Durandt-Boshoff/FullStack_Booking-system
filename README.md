# 🎮 Save Point Studio

A full-stack booking and reservation system for a gaming studio. Users can choose a studio room, select a date and available time slot, make a reservation, and manage existing bookings.

## ✨ Features

- **Room selection:** Choose between the Gaming Room, Streaming Room, and Creation Room.
- **Date selection:** Select a date for your session.
- **Live availability:** View available time slots retrieved from the backend.
- **Booking form:** Submit a reservation with your name and email address.
- **Booking validation:** Prevent incomplete bookings, past dates and times, and conflicting reservations.
- **Reservation management:** View existing reservations and cancel bookings.
- **Responsive design:** Layout designed for desktop and mobile screens.

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express.js
- CORS
- In-memory JavaScript array for storing bookings

## 📁 Project Structure

```text
Save-Point-Studio/
├── backend/
│   ├── data/
│   │   └── bookings.js
│   ├── routes/
│   │   ├── bookings.js
│   │   └── slots.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- Git, if cloning the repository

### 1. Clone the repository

```bash
git clone https://github.com/Durandt-Boshoff/FullStack_Booking-system
cd Save-Point-Studio
```

Replace `YOUR_REPOSITORY_URL` with the URL of your Git repository.

### 2. Install backend dependencies

Open a terminal in the project root and run:

```bash
cd backend
npm install
```

### 3. Start the backend server

From the `backend` directory, run:

```bash
node server.js
```

The Express API runs at:

`http://localhost:3000`

### 4. Install frontend dependencies

Open a **second terminal** in the project root and run:

```bash
cd frontend
npm install
```

### 5. Start the frontend

From the `frontend` directory, run:

```bash
npm run dev
```

Open the local URL displayed by Vite, usually:

`http://localhost:5173`

Keep both servers running while using the application.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/slots?resource=:resource&date=:date` | Retrieves available time slots for a room and date. |
| POST | `/api/bookings` | Creates a booking after validating the submitted details. |
| GET | `/api/bookings/:date/:resource` | Retrieves confirmed bookings for a room and date. |
| DELETE | `/api/bookings/:id` | Cancels a booking using its ID. |

### Creating a booking

The `POST /api/bookings` endpoint accepts a JSON request body containing:

```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "resource": "gaming-room",
  "date": "2026-11-15",
  "time": "11:00"
}
```

The API validates the required fields, checks the selected date and time, and prevents double-booking a room's time slot.

## 💾 Data Storage

Bookings are stored in an in-memory JavaScript array. This keeps the project simple and avoids requiring a database.

**Important:** Bookings created during a session are not permanently stored. Restarting the backend resets the array to its initial data. A database would be needed for persistent storage in a production application.

## 🎨 Design

Save Point Studio uses a gaming-inspired visual theme with warm colours in light mode and a darker purple palette in dark mode. The interface includes responsive navigation and dedicated booking and reservation views.