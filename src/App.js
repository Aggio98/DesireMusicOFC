import "./App.css";
import { Contact, Footage } from "./pages";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import background from "./assets/Background.mp4";

function App() {
  return (
    <div className="App">
      <div className="main">
        <video src={background} autoPlay loop muted type="video/mp4" />
        <div className="content">
          <Logo />
          <div className="navbar">
            <Navbar />
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/footage" element={<Footage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
