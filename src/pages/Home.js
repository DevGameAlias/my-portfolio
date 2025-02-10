import React from "react";

import homeImage from "../assets/home-image.png";
import portfolioImage from "../assets/portfolio-image.png";
import aboutMeImage from "../assets/about-me-image.png";
import contactImage from "../assets/contact-me.png";

const Home = () => {
  // Array containing the title and corresponding image for each card
  const cards = [
    {
      title: "Home",
      image: homeImage
    },
    {
      title: "Portfolio",
      image: portfolioImage,
    },
    {
      title: "About Me",
      image: aboutMeImage,
    },
    {
      title: "Contact",
      image: contactImage,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center justify-center">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Portfolio!</h1>

      {/* Card Grid */}
      <div className="relative w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards */}
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg shadow-lg py-16 p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              style={{ height: "40rem", width: "70%" }} // Adjusting card height and width
            >
              {/* Card Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{card.title}</h2>

              {/* Floating Image */}
              <div className="absolute top-1/3 transform -translate-y-1/3 w-60 h-60 bg-gray-300 rounded-full shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Card Description */}
              <p className="absolute bottom-2 text-gray-600 text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
