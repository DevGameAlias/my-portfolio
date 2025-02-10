import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<footer className="bg-gray-900 text-white text-center py-6 w-full">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm">© 2025 Ricardo Lugo. All rights reserved.</p>

        {/* Navigation Links */}
        <div className="flex space-x-6 my-4 md:my-0">
          <Link to="/home" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/portfolio" className="hover:text-blue-400 transition">Portfolio</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Me</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/DevGameAlias" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/ricardo-lugo-859b60217" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
