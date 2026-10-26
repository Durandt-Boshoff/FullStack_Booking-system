import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./components/booking"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App