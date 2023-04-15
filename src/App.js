import "./App.css";
import { Homepage, Playlists, Contact, Events, Footage, Social } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Logo } from "./components/Logo";
import background from "./assets/Background.mp4";

function App() {
  return (
    <div className="App">
      <div className="main">
        <video src={background} autoPlay loop muted type="video/mp4" />
        <div className="content">
          <Logo />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footage" element={<Footage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
