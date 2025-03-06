import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; // React Router Hook
import homeImage from "../assets/home-image.png"; // Home Page Image
import portfolioImage from "../assets/portfolio-image.png"; // Portfolio Page Image
import aboutMeImage from "../assets/about-me-image.png"; // About Me Page Image
import contactImage from "../assets/contact-me.png"; // Contact Page Image
import landingSeo from "../assets/landingPageseo.png"; // SEO Image
const Landing = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Define cards for navigation with title, image, and path
  const cards = [
    { title: "Home", image: homeImage, path: "/home", description: "Discover who I am, my journey, and my approach to creating innovative solutions." },
    { title: "Portfolio", image: portfolioImage, path: "/portfolio", description: "Explore the projects I've worked on, showcasing my skills in development and design." },
    { title: "About Me", image: aboutMeImage, path: "/about", description: "Learn more about my background, passions, and the experiences that shaped my career." },
    { title: "Contact", image: contactImage, path: "/contact", description: "Get in touch with me for collaborations, questions, or opportunities to work together." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center justify-center">
      <Helmet>
        <title>Welcome - My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        <meta property="og:title" content="Welcome - My Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        <meta property="og:image" content={landingSeo} />
        <meta property="og:url" content="https://devgamealias.github.io/my-portfolio/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome - My Portfolio" />
        <meta name="twitter:description" content="Welcome to my personal portfolio showcasing my projects, skills, and contact information." />
        <meta name="twitter:image" content={landingSeo} />
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

              {/* Description positioned higher with padding */}
              <p className="absolute bottom-24 px-4 text-gray-600 text-center w-full">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
