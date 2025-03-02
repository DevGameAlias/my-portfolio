import React from "react";
import { Helmet } from "react-helmet";
import portfolioImage from "../assets/portfolio-image.png"; // Portfolio Image
import userProfile from "../assets/Userprofile.png";
import blogCreation from "../assets/Blogcreation.png";
import blogComment from "../assets/Blogcomment.png";
import blogHomepage from "../assets/BlogHomepage.png";
import emailSign from "../assets/emailsignup.png";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>Portfolio - My Work</title>
        <meta name="description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        <meta property="og:title" content="Portfolio - My Work" />
        <meta property="og:description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        {/* TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image*/}
        <meta property="og:image" content="link_to_your_image.jpg" />
        {/*TODO: Replace 'https://your-portfolio-url.com/portfolio' with the actual URL of your portfolio*/}
        <meta property="og:url" content="https://your-portfolio-url.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - My Work" />
        <meta name="twitter:description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        {/*TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image*/}
        <meta name="twitter:image" content="link_to_your_image.jpg" />
      </Helmet>
      {/* Top Centered Portfolio Image */}
      <img src={portfolioImage} alt="Portfolio Icon" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-10">My Portfolio</h1>

      <div className="max-w-7xl w-full space-y-16">
        {/* Capstone Project - Text Left, Images Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Capstone Project</h2>
            <p>This was my final project from my bootcamp, where I built a fully functional web application. It incorporates front-end, back-end, and database design, along with API integration.</p>
          </div>
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* TODO replace Images placeholders */}
            <img src={userProfile} alt="Capstone Screenshot 1" className="rounded-lg shadow-lg" />
            <img src={blogCreation} alt="Capstone Screenshot 2" className="rounded-lg shadow-lg" />
            <img src={blogHomepage} alt="Capstone Screenshot 3" className="rounded-lg shadow-lg" />
            <img src={blogComment} alt="Capstone Screenshot 4" className="rounded-lg shadow-lg" />
            <img src={emailSign} alt="Capstone Screenshot 5" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Upcoming Project Placeholder - Image Right, Text Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Upcoming Project: Calculator</h2>
            <p>
              This is an upcoming calculator project where I will implement complex mathematical logic using JavaScript and React. The goal is to create an interactive and visually engaging
              calculator.
            </p>
          </div>
          <div className="w-80 h-80 bg-gray-400 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white text-xl">[ Project Placeholder ]</span>
          </div>
        </div>

        {/* Weather App - Text Left, Live Preview Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Weather App</h2>
            <p>
              A real-time weather application that fetches API data to display current weather conditions. Built using JavaScript, React, and an external weather API, this project helped me learn how
              to handle API requests efficiently.
            </p>
          </div>
          {/* Live Weather App Preview */}
          <div className="w-80 h-80 bg-gray-900 flex items-center justify-center rounded-lg shadow-lg">
            <iframe src="[LIVE_WEATHER_APP_URL]" title="Weather App" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
