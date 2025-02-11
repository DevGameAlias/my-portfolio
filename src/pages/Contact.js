import React from "react";
import contactImage from "../assets/contact-me.png"; // Contact Page Image

const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;
const githubURL = process.env.REACT_APP_GITHUB_URL;
const linkedinURL = process.env.REACT_APP_LINKEDIN_URL;
console.log("Email:", process.env.REACT_APP_CONTACT_EMAIL);
console.log("GitHub:", process.env.REACT_APP_GITHUB_URL);
console.log("LinkedIn:", process.env.REACT_APP_LINKEDIN_URL);



const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      {/* Top Centered Contact Image */}
      <img src={contactImage} alt="Contact Icon" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6">Get in Touch</h1>

      {/* Contact Info */}
      <p className="text-white text-lg text-center max-w-2xl mb-6">
        I’d love to connect! Whether you have a project in mind, want to collaborate, or just want to chat about
        development, feel free to reach out via email, LinkedIn, or GitHub.
      </p>

      {/* Contact Links */}
      <div className="flex flex-col items-center space-y-4">
        {/* Email */}
        <a 
          href={`mailto:${contactEmail}`}
          className="bg-white text-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          📧 Send Me an Email
        </a>

        {/* LinkedIn */}
        <a 
          href={linkedinURL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-lg hover:text-blue-300 transition"
        >
          🔗 Connect on LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href={githubURL}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white text-lg hover:text-blue-300 transition"
        >
          🖥️ Check Out My GitHub
        </a>
      </div>
    </div>
    
  );
};

export default Contact;
