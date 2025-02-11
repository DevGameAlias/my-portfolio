import React from "react";
import avatarImage from "../assets/avatar.png"; // Import Avatar Image
import aboutImage from "../assets/about-me-image.png"; // About Me Image

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      {/* Top Centered Avatar Image */}
      <img src={aboutImage} alt="Avatar" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-10">About Me</h1>

      <div className="max-w-7xl w-full space-y-16">
        {/* Introduction - Text Left, Avatar Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
            <p>
              Hi, I’m Ricardo, a passionate full-stack developer with a love for problem-solving
              and building meaningful digital experiences. I specialize in JavaScript, React, and modern
              web technologies to create seamless and interactive applications.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={avatarImage} alt="Avatar" className="w-72 h-72 rounded-full border-4 border-white drop-shadow-lg" />
          </div>
        </div>

        {/* Skills & Technologies - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="w-80 h-80 bg-gray-400 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white text-xl">[ Tech Stack Image Placeholder ]</span>
          </div>
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p>
              I have experience working with modern technologies such as JavaScript, React.js, Node.js, 
              MongoDB, and Tailwind CSS. I also have a strong foundation in API development, 
              database management, and creating efficient, scalable applications.
            </p>
          </div>
        </div>

        {/* Personal Interests - Text Centered */}
        <div className="text-white text-lg leading-relaxed text-center">
          <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
          <p>
            When I’m not coding, I enjoy gaming, exploring new technologies, and finding creative ways to solve
            challenges. I’m always looking for opportunities to grow and expand my knowledge in the tech space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
