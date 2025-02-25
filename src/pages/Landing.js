import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; // React Router Hook
import homeImage from "../assets/home-image.png";
import portfolioImage from "../assets/portfolio-image.png";
import aboutMeImage from "../assets/about-me-image.png";
import contactImage from "../assets/contact-me.png";

const Landing = () => {
  const navigate = useNavigate(); // Hook for navigation

  const cards = [
    { title: "Home", image: homeImage, path: "/home" },
    { title: "Portfolio", image: portfolioImage, path: "/portfolio" },
    { title: "About Me", image: aboutMeImage, path: "/about" },
    { title: "Contact", image: contactImage, path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center justify-center">
      <Helmet>
        <title>Welcome - My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        <meta property="og:title" content="Welcome - My Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        {/* TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image */}
        <meta property="og:image" content="link_to_your_image.jpg" />
        {/* TODO: Replace 'https://your-portfolio-url.com' with the actual URL of your portfolio */}
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome - My Portfolio" />
        <meta name="twitter:description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        {/* TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image */}
        <meta name="twitter:image" content="link_to_your_image.jpg" />
      </Helmet>
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Portfolio!</h1>

      <div className="relative w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.path)} // Navigates to respective page
              className="relative bg-white rounded-lg shadow-lg py-16 p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center cursor-pointer"
              style={{ height: "40rem", width: "70%" }}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{card.title}</h2>

              <div className="absolute top-1/3 transform -translate-y-1/3 w-60 h-60 bg-gray-300 rounded-full shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-full" />
              </div>

              <p className="absolute bottom-2 text-gray-600 text-center w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
