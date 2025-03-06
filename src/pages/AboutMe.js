import React from "react";
import { Helmet } from "react-helmet";
import avatarImage from "../assets/avatar.png"; // Import Avatar Image
import aboutSeo from "../assets/aboutMeseo.png"; // SEO Image

import "../styles/carousel.css"; // Import custom carousel styles

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        <meta property="og:title" content="About Me - My Portfolio" />
        <meta property="og:description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        <meta property="og:image" content={aboutSeo} />
        {/* TODO: Replace 'https://your-portfolio-url.com/about' with the actual URL of your portfolio */}
        <meta property="og:url" content="https://your-portfolio-url.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - My Portfolio" />
        <meta name="twitter:description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        <meta name="twitter:image" content={aboutSeo} />
      </Helmet>
      {/* Top Centered Avatar Image */}
      <img src={avatarImage} alt="Avatar" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      <div className="max-w-7xl w-full space-y-16">
        {/* Introduction */}
        <div className="text-white text-lg leading-relaxed text-center">
          <h2 className="text-5xl font-bold mb-4 ">Who I Am</h2>
          <p>
            Hi, I’m Ricardo, a passionate full-stack developer with a love for problem-solving and creating impactful digital experiences. I specialize in JavaScript, React, and modern web
            technologies to craft seamless, user-friendly applications. Currently, I’m working on Scripted Realms, a personal passion project that blends storytelling with interactive gameplay.
            Through this project, I’m pushing my skills to new heights, particularly in game development and immersive UI design. <br />
          </p>
          <br />
          <p>
            It’s been an exciting challenge to create a unique, engaging experience for players, and I’m constantly learning as I work through the complexities of both the back-end and front-end.
            Looking ahead, I’m eager to continue growing in the tech industry by developing innovative applications that solve real-world problems. My goal is to expand my expertise into areas like
            mobile app development and full-stack solutions, continually honing my craft and making a positive impact through technology. Outside of coding, I value creativity, continuous learning,
            and building solutions that are both functional and meaningful.
          </p>
        </div>

        {/* Development Approach */}
        <div className="text-white text-lg leading-relaxed text-center">
          <h2 className="text-3xl font-bold mb-4 ">My Development Approach</h2>
          <p>
            I believe in writing clean, maintainable code that drives both functionality and user satisfaction. My approach to development is rooted in understanding the full scope of a project—from
            design to deployment. I focus on building scalable solutions that grow with the needs of my clients. Whether it's a single-page application or a large-scale enterprise system, I prioritize
            performance, security, and an intuitive user experience.
          </p>
          <br />
          <p>
            Using a combination of modern tools like React, Node.js, and MongoDB, I craft fast and efficient web applications that meet the demands of today’s digital world. I am constantly evolving
            my skill set to keep pace with new advancements in the tech industry, and I look forward to creating more meaningful digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
