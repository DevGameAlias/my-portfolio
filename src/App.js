import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing"; // Now the landing page
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page (No Navbar or Footer) */}
        <Route path="/" element={<Landing />} />

        {/* All Other Pages (With Navbar & Footer) */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-grow flex flex-col">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
