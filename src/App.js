import "./App.css";
import { Home, Playlists, Contact, Events, Footage, Social } from "./pages";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playlists" element={<Playlists />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Footage" element={<Footage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Social" element={<Social />} />
      </Routes>
    </div>
  );
}

export default App;
