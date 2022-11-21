
import './App.css';
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";
import Contacts from "./Pages/Contacts/Contacts";
import Booking from "./Pages/Booking/Booking";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
