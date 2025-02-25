import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home-image.png";
import portfolioIcon from "../assets/portfolio-image.png";
import aboutIcon from "../assets/about-me-image.png";
import contactIcon from "../assets/contact-me.png";

const Navbar = () => {
  return (
    <>
      {/* Navbar Wrapper */}
      <div className="h-32"></div> {/* Creates space for navbar height */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-6 flex justify-around shadow-md z-50">
        <Link to="/home" className="flex flex-col items-center space-y-2">
          <img src={homeIcon} alt="Home" className="w-24 h-24 rounded-full border-4 border-white drop-shadow-lg hover:scale-110 transition-transform" />
          <span className="text-lg font-semibold">Home</span>
        </Link>

        <Link to="/portfolio" className="flex flex-col items-center space-y-2">
          <img src={portfolioIcon} alt="Portfolio" className="w-24 h-24 rounded-full border-4 border-white drop-shadow-lg hover:scale-110 transition-transform" />
          <span className="text-lg font-semibold">Portfolio</span>
        </Link>

        <Link to="/about" className="flex flex-col items-center space-y-2">
          <img src={aboutIcon} alt="About Me" className="w-24 h-24 rounded-full border-4 border-white drop-shadow-lg hover:scale-110 transition-transform" />
          <span className="text-lg font-semibold">About Me</span>
        </Link>

        <Link to="/contact" className="flex flex-col items-center space-y-2">
          <img src={contactIcon} alt="Contact" className="w-24 h-24 rounded-full border-4 border-white drop-shadow-lg hover:scale-110 transition-transform" />
          <span className="text-lg font-semibold">Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
