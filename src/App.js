import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Presentation from "./component/presentation/presentation";
import Competences from "./component/competences/competences";
import Contact from "./component/contact/contact";
import Experiences from "./component/experiences/experiences";
import Formations from "./component/formations/formations";
import Passions from "./component/passions/passions";
import Portfolio from "./component/portfolio/portfolio";
import Footer from "./component/utils/footer/footer";
import Header from "./component/utils/header/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
