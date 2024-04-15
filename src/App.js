import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import MeinPerson from "./Components/Meinperson/Meinperson";
import MeinTeam from "./Components/Meinteam/Meinteam";
import Angebote from "./Components/Angebote/Angebote";
import Kontakt from "./Components/Kontakt/Kontakt";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mein-person" element={<MeinPerson />} />
            <Route path="/mein-team" element={<MeinTeam />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
