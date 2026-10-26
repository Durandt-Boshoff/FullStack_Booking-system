import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./components/booking"
import Reservation from "./components/reservation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App