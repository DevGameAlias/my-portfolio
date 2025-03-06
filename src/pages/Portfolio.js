import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import portfolioImage from "../assets/portfolio-image.png"; // Portfolio Image
import userProfile from "../assets/Userprofile.png";
import blogCreation from "../assets/Blogcreation.png";
import blogComment from "../assets/Blogcomment.png";
import blogHomepage from "../assets/BlogHomepage.png";
import emailSign from "../assets/emailsignup.png";
import "../styles/carousel.css"; // Import custom carousel styles
import portfolioSeo from "../assets/PortfolioSEO.png"; // SEO Image

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center px-12 pt-24 pb-12">
      <Helmet>
        <title>Portfolio - My Work</title>
        <meta name="description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        <meta property="og:title" content="Portfolio - My Work" />
        <meta property="og:description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        <meta property="og:image" content={portfolioSeo} />
        {/*TODO: Replace 'https://your-portfolio-url.com/portfolio' with the actual URL of your portfolio*/}
        <meta property="og:url" content="https://your-portfolio-url.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - My Work" />
        <meta name="twitter:description" content="Explore my portfolio showcasing various projects including a capstone project, upcoming calculator project, and a real-time weather application." />
        <meta name="twitter:image" content={portfolioSeo} />
      </Helmet>
      {/* Top Centered Portfolio Image */}
      <img src={portfolioImage} alt="Portfolio Icon" className="w-80 h-80 rounded-full border-4 border-white drop-shadow-lg mb-10" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-10">My Portfolio</h1>

      <div className="max-w-7xl w-full space-y-16">
        {/* Capstone Project - Text Left, Images Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="text-white text-lg leading-relaxed text-left">
            <h2 className="text-3xl font-bold mb-4 text-center">Capstone Project</h2>
            <p>
              For my capstone project, I worked with a team of four developers to create a fully functional web application, where I took on the role of Project Manager. The project allowed me to
              demonstrate my leadership skills and ability to collaborate in a fast-paced development environment.
            </p>
            <br />
            <p>
              We built a dynamic platform with key features, including a home page, blog page, story page, events page, email sign-up, and an admin profile that allows content management. The app’s
              front-end was developed using React.js, while the back-end was powered by Node.js and Express.js. We utilized MongoDB for the database and integrated third-party APIs to enhance
              functionality.
            </p>
            <br />
            <p>
              The admin profile provides the ability to create and edit blog posts and stories, manage events, and review user comments. Throughout the project, I utilized Git for version control and
              Jira for task management, ensuring smooth coordination and timely delivery. As project manager, I was responsible for overseeing the development process, assigning tasks, and ensuring
              milestones were met. I facilitated communication, addressed issues, and kept the team focused on delivering the project on time.
            </p>
            <br />
            <p>
              This project is a reflection of my technical expertise in full-stack development and my ability to manage projects, collaborate effectively, and integrate tools to streamline the
              development process.
            </p>
            <br />
          </div>
          {/* Carousel of Images */}
          <div className="w-full max-w-2xl h-full flex items-center">
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
              style={{ height: "100%" }} // Make carousel height match the content on the right
            >
              <div className="carousel-slide">
                <div className="slide-background">
                  <img
                    src={userProfile}
                    alt="Capstone Screenshot 1"
                    className="object-cover rounded-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(userProfile)}
                  />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img
                    src={blogCreation}
                    alt="Capstone Screenshot 2"
                    className="object-cover rounded-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(blogCreation)}
                  />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img
                    src={blogHomepage}
                    alt="Capstone Screenshot 3"
                    className="object-cover rounded-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(blogHomepage)}
                  />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img
                    src={blogComment}
                    alt="Capstone Screenshot 4"
                    className="object-cover rounded-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(blogComment)}
                  />
                </div>
              </div>
              <div className="carousel-slide">
                <div className="slide-background">
                  <img
                    src={emailSign}
                    alt="Capstone Screenshot 5"
                    className="object-cover rounded-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(emailSign)}
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Upcoming Project Placeholder - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="w-80 h-80 bg-gray-400 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white text-xl">[ Project Placeholder ]</span>
          </div>
          <div className="text-white text-lg leading-relaxed text-left">
            <h2 className="text-3xl font-bold mb-4 text-center">Themed Calculator</h2>
            <p>
              I created a futuristic theme-based calculator using JavaScript and React, combining simple mathematical functionality with an interactive, visually engaging design. The app performs
              basic arithmetic operations—addition, subtraction, multiplication, and division—along with a Clear button to reset the calculations.
            </p>
            <br />
            <p>
              The design features a semi-transparent glass pane with holographic, floating buttons that react with dynamic animations. When buttons are pressed, an energy surge effect is shown,
              transforming into numbers on the display, which creates an engaging, high-tech experience for users. All the visual effects and animations are implemented entirely with CSS, offering a
              sleek and polished look.
            </p>
            <br />
            <p>
              The app is built with React's component-based architecture, ensuring modularity and maintainability, while JavaScript handles the math logic. This project showcases my ability to combine
              functionality with an engaging user interface, resulting in a smooth and intuitive calculator experience.
            </p>
            <br />
          </div>
        </div>

        {/* Weather App - Text Left, Live Preview Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-white text-lg leading-relaxed text-left">
            <h2 className="text-3xl font-bold mb-4 text-center">Weather App</h2>
            <p>
              For my weather app, I leveraged React and the OpenWeatherMap API to build an interactive and visually dynamic tool that provides real-time weather data, including a 5-day forecast. The
              app features a temperature toggle between Celsius and Fahrenheit and adjusts the background color based on the current weather conditions, providing a personalized user experience.
            </p>
            <br />
            <p>
              Throughout development, I encountered challenges in integrating weather-themed animations and ensuring the app’s responsiveness across devices. To overcome these, I used Lottie for React
              and Framer Motion for smooth animations and utilized Tailwind CSS for quick styling and responsive layouts.
            </p>
            <br />
            <p>
              A significant hurdle was handling API data efficiently, especially ensuring the accurate display of temperature, wind speed, and humidity in a way that felt intuitive. By breaking down
              the UI into reusable components and optimizing API calls, I was able to streamline performance and make the app feel smooth and responsive.
            </p>
            <br />
            <p>This project showcases my ability to combine backend API integration, dynamic front-end design, and user-focused development in a clean, functional, and aesthetically pleasing app.</p>
          </div>

          {/* Live Weather App Preview */}
          <div className="w-80 h-80 bg-gray-900 flex items-center justify-center rounded-lg shadow-lg">
            <iframe src="[LIVE_WEATHER_APP_URL]" title="Weather App" className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <img src={modalImage} alt="Full Screen" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
