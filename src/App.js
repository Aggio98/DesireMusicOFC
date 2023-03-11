import "./App.css";
import { Home, Playlists, Contact, Events, Footage, Social } from "./pages";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import background from "./assets/Background.mp4";
import logo from "./assets/Desire Logo.png";

function App() {
  return (
    <div className="App">
      <video
        className="videoTag"
        width="100%"
        height="100%"
        object-fit="cover"
        autoPlay
        loop
        muted
      >
        <source src={background} type="video/mp4" />
      </video>
      <div>
        <img
          src={logo}
          alt="Logo"
          width="100%"
          height="100%"
          color="transparent"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footage" element={<Footage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
