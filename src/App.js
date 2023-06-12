import "./App.css";
import { Contact, Footage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo";
import background from "./assets/Background.mp4";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="background-video">
          <video id="desire" autoPlay loop muted>
            <source src={background} type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <Link to="/">
            <Logo />
          </Link>
          <Navbar />
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
