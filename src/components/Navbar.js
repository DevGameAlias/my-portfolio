import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex justify-around bg-gray-800 text-white p-4">
      <Link to="/" className="flex items-center space-x-2">
        <FaHome />
        <span>Home</span>
      </Link>
      <Link to="/portfolio" className="flex items-center space-x-2">
        <FaBriefcase />
        <span>Portfolio</span>
      </Link>
      <Link to="/about" className="flex items-center space-x-2">
        <FaUser />
        <span>About Me</span>
      </Link>
      <Link to="/contact" className="flex items-center space-x-2">
        <FaEnvelope />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default Navbar;
