
import './App.css';
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Team from "./Pages/Team"
import Gallery from "./Pages/Gallery"
import Contacts from "./Pages/Contacts"
import Booking from "./Pages/Booking"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourTeam" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
