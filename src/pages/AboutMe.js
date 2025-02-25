import React from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import avatarImage from "../assets/avatar.png"; // Import Avatar Image
import aboutImage from "../assets/about-me-image.png"; // About Me Image
import asset1 from "../assets/AppCSSdesign.PNG"; // AppCSSDesign Asset
import asset2 from "../assets/LoginDesign.PNG"; // LoginDesign
import asset3 from "../assets/ReactHookdesign.PNG"; // ReactHookDesign
import asset4 from "../assets/MongoDBDesign.PNG"; // MongoDBDesign
import asset5 from "../assets/AppjsDesign.PNG"; // AppjsDesign
import "../styles/carousel.css"; // Import custom carousel styles

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        <meta property="og:title" content="About Me - My Portfolio" />
        <meta property="og:description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        {/* TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image*/}
        <meta property="og:image" content="link_to_your_image.jpg" />
        {/* TODO: Replace 'https://your-portfolio-url.com/about' with the actual URL of your portfolio*/}
        <meta property="og:url" content="https://your-portfolio-url.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - My Portfolio" />
        <meta name="twitter:description" content="Learn more about Ricardo, a passionate full-stack developer specializing in JavaScript, React, and modern web technologies." />
        {/* TODO: Replace 'link_to_your_image.jpg' with the actual URL of your representative image */}
        <meta name="twitter:image" content="link_to_your_image.jpg" />
      </Helmet>
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
              Hi, I’m Ricardo, a passionate full-stack developer with a love for problem-solving and building meaningful digital experiences. I specialize in JavaScript, React, and modern web
              technologies to create seamless and interactive applications.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={avatarImage} alt="Avatar" className="w-72 h-72 rounded-full border-4 border-white drop-shadow-lg" />
          </div>
        </div>

        {/* Skills & Technologies - Carousel */}
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
                  <img src={asset1} alt="Asset 1" className="object-cover rounded-lg" />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img src={asset2} alt="Asset 2" className="object-cover rounded-lg" />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img src={asset3} alt="Asset 3" className="object-cover rounded-lg" />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img src={asset4} alt="Asset 4" className="object-cover rounded-lg" />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img src={asset5} alt="Asset 5" className="object-cover rounded-lg" />
                </div>
              </div>
            </Carousel>
          </div>
          <div className="text-white text-lg leading-relaxed">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p>
              I have experience working with modern technologies such as JavaScript, React.js, Node.js, MongoDB, and Tailwind CSS. I also have a strong foundation in API development, database
              management, and creating efficient, scalable applications.
            </p>
          </div>
        </div>

        {/* Personal Interests - Text Centered */}
        <div className="text-white text-lg leading-relaxed text-center">
          <h2 className="text-3xl font-bold mb-4">Beyond Coding</h2>
          <p>
            When I’m not coding, I enjoy gaming, exploring new technologies, and finding creative ways to solve challenges. I’m always looking for opportunities to grow and expand my knowledge in the
            tech space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
