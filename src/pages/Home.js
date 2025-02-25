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

      {/* Content Sections */}
      <div className="max-w-7xl w-full space-y-16">
        {/* Section 1 - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p>This is where I showcase my journey, projects, and technical expertise. I focus on blending technology with creativity to create meaningful solutions.</p>
          </div>
          <div className="flex justify-end">
            <div className="w-80 h-80 bg-gray-400 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-white text-xl">[ IMAGE HERE ]</span>
            </div>
          </div>
        </div>

        {/* Section 2 - Placeholder Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-start">
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
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">My Development Approach</h2>
            <p>I specialize in front-end and full-stack development using modern technologies. Every project I create is designed with scalability, performance, and usability in mind.</p>
          </div>
        </div>

        {/* Section 3 - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Why I Build</h2>
            <p>My passion for development comes from the desire to create immersive, meaningful, and visually engaging digital experiences.</p>
          </div>
          <div className="flex justify-end">
            <div className="w-80 h-80 bg-gray-400 flex items-center justify-center rounded-lg shadow-lg">
              {/* Update with image */}
              <span className="text-white text-xl">[ IMAGE HERE ]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
