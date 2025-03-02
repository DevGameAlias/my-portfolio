import React from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import homeImage from "../assets/home-image.png"; // Top-centered image
import placeholderImage from "../assets/about-me-image.png"; // Placeholder image
import "../styles/carousel.css"; // Import custom carousel styles

const Home = () => {
  return (
    <div className="flex-grow bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>Home - My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        <meta property="og:title" content="Home - My Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        {/*TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image*/}
        <meta property="og:image" content="link_to_your_image.jpg" />
        {/* TODO: Replace 'https://your-portfolio-url.com' with the actual URL of your portfolio */}
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - My Portfolio" />
        <meta name="twitter:description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        {/*  TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image  */}
        <meta name="twitter:image" content="link_to_your_image.jpg" />
      </Helmet>
      {/* Top Centered Image */}
      <img src={homeImage} alt="Home Icon" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Welcome Section */}
      <div className="text-center text-white text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p>
          Welcome to my digital space where creativity meets technology. This portfolio is a reflection of my journey as a developer, designer, and problem solver. I am a passionate developer with
          experience in both front-end and back-end technologies. My mission is to bridge the gap between aesthetic design and functional code, crafting seamless and interactive experiences for users.
          Feel free to explore my projects, dive deeper into my development process, or get in touch with me for collaboration opportunities.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-full max-w-2xl mb-16">
        {" "}
        {/* Adjusted max width for smaller carousel */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          centerMode
          centerSlidePercentage={70}
          className="parallax-carousel"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-prev">
                &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-next">
                &gt;
              </button>
            )
          }
        >
          <div className="carousel-slide">
            <div className="slide-background">
              {/* TODO: update placeholder images */}
              <img src={placeholderImage} alt="Placeholder 1" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="slide-background">
              <img src={placeholderImage} alt="Placeholder 2" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="slide-background">
              <img src={placeholderImage} alt="Placeholder 3" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="slide-background">
              <img src={placeholderImage} alt="Placeholder 4" className="object-cover rounded-lg" />
            </div>
          </div>
          <div className="carousel-slide">
            <div className="slide-background">
              <img src={placeholderImage} alt="Placeholder 5" className="object-cover rounded-lg" />
            </div>
          </div>
        </Carousel>
      </div>

      {/* Development Approach Section */}
      <div className="text-center text-white text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">My Development Approach</h2>
        <p>
          I believe in writing clean, maintainable code that drives both functionality and user satisfaction. My approach to development is rooted in understanding the full scope of a project—from
          design to deployment. I focus on building scalable solutions that grow with the needs of my clients. Whether it's a single-page application or a large-scale enterprise system, I prioritize
          performance, security, and an intuitive user experience. Using a combination of modern tools like React, Node.js, and MongoDB, I craft fast and efficient web applications that meet the
          demands of today’s digital world. I am constantly evolving my skill set to keep pace with new advancements in the tech industry, and I look forward to creating more meaningful digital
          experiences.
        </p>
      </div>

      {/* Why I Build Section */}
      <div className="text-center text-white text-lg leading-relaxed max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why I Build</h2>
        <p>
          I build because I’m passionate about solving problems and creating innovative solutions that can positively impact people’s lives. For me, coding isn’t just about writing lines of code. It’s
          about tackling challenges, learning new concepts, and thinking critically about how technology can improve the world. Whether it's developing a responsive website, an interactive
          application, or a backend system that powers a service, I enjoy creating experiences that leave a lasting impression on users. The ever-evolving tech landscape fuels my desire to continue
          growing and pushing the boundaries of what’s possible. Every project I work on is an opportunity to bring a unique idea to life and help others achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default Home;
