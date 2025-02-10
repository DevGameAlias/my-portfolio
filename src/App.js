import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"; // Now the landing page
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page (No Navbar) */}
        <Route path="/" element={<Landing />} />

        {/* All Other Pages (With Navbar) */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
