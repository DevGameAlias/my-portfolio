import React from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "../styles/carousel.css"; // Import custom carousel styles

import homeImage from "../assets/home-image.png"; // Top-centered image
import asset1 from "../assets/AppCSSdesign.PNG"; // AppCSSDesign Asset
import asset2 from "../assets/LoginDesign.PNG"; // LoginDesign
import asset3 from "../assets/ReactHookdesign.PNG"; // ReactHookDesign
import asset4 from "../assets/MongoDBDesign.PNG"; // MongoDBDesign
import asset5 from "../assets/AppjsDesign.PNG"; // AppjsDesign
import seoHome from "../assets/homePageseo.png"; // SEO Image

const Home = () => {
  return (
    <div className="flex-grow bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>Home - My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        <meta property="og:title" content="Home - My Portfolio" />
        <meta property="og:description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        <meta property="og:image" content={seoHome} />
        <meta property="og:url" content="https://devgamealias.github.io/my-portfolio/home" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - My Portfolio" />
        <meta name="twitter:description" content="Welcome to my personal portfolio showcasing my journey, projects, and technical expertise." />
        <meta name="twitter:image" content={seoHome} />
      </Helmet>
      {/* Top Centered Image */}
      <img src={homeImage} alt="Home Icon" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Welcome Section */}
      <div className="text-center text-white text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome to My Portfolio</h2>
        <p className="">
          Welcome to my digital space where creativity meets technology. This portfolio is a reflection of my journey as a developer, designer, and problem solver. I am a passionate developer with
          experience in both front-end and back-end technologies.{" "}
        </p>
        <p>
          <br />
          My mission is to bridge the gap between aesthetic design and functional code, crafting seamless and interactive experiences for users. Feel free to explore my projects, dive deeper into my
          development process, or get in touch with me for collaboration opportunities.
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
          style={{ transform: "scale(0.7)" }} // Reduce the size by 30%
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

      {/* Skills & Technologies Section */}
      <div className="text-white text-lg leading-relaxed mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        <p>
          I have experience working with modern technologies such as JavaScript, React.js, Node.js, MongoDB, and Tailwind CSS. I also have a strong foundation in API development, database management,
          and creating efficient, scalable applications.
        </p>
      </div>

      {/* Why I Build Section */}
      <div className="text-center text-white text-lg leading-relaxed max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Why I Build</h2>
        <p>
          I build because I’m passionate about solving problems and creating innovative solutions that can positively impact people’s lives. For me, coding isn’t just about writing lines of code; it’s
          about tackling challenges, learning new concepts, and thinking critically about how technology can improve the world.
        </p>
        <br />
        <p>
          Whether it's developing a responsive website, an interactive application, or a backend system that powers a service, I enjoy creating experiences that leave a lasting impression on users.
          The ever-evolving tech landscape fuels my desire to continually grow and push the boundaries of what’s possible. Every project I work on is an opportunity to bring a unique idea to life and
          help others achieve their goals.
        </p>
      </div>
    </div>
  );
};

export default Home;
