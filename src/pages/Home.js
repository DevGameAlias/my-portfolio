import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300 flex flex-col items-center justify-center">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to My Portfolio!</h1>
      {/* CardGrid */}
      <div className="relative w-4/5">
        {/* Connecting Bar */}
        <div 
  className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg"
  style={{
    width: "calc(70% - 2rem)", // Matches the card grid width
    height: "8rem", // Bar height
    top: "calc(50% - 6rem)", // Aligns the bar with the images (adjust based on image size)
  }}
></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards */}
          {["Home", "Portfolio", "About Me", "Contact"].map((item, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg shadow-lg py-16 p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              style={{height: "40rem", width: "70%"}} // Adjusting card height and width
            >
              {/* Card Title */}
              <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{item}</h2>
              {/* Floating Image */}
              <div className="absolute top-1/3 transform -translate-y-1/3 w-60 h-60 bg-gray-300 rounded-full shadow-2xl border-4 border-gray-700 flex items-center justify-center">
                <img src="https://media.istockphoto.com/id/2163519604/photo/abstract-image-of-distant-galaxies-merging-together.jpg?s=2048x2048&w=is&k=20&c=UXpZDeshPjIl8x4ns9HbyXjTK2zbRwgKsCMRcjkN62c=" alt={item} className="w-full h-full object-cover rounded-full" />
              </div>
              {/* Card Description */}
              <p className="absolute bottom-2 text-gray-600 text-center w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
