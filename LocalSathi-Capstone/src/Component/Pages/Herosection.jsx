import React from 'react';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://imgs.search.brave.com/3-zGp-q6dD_1in166gaekotH85eUE5vWLrWC4_hL3Cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWxsdXh1cnkud3Bl/bmdpbmVwb3dlcmVk/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNS9MYS1U/b3JyZXR0YS1MYWtl/LVJlc29ydC1TcGEu/anBn)',
        backgroundSize: 'cover',
        height: '800px',
      }}
    >
      <div className="container mx-auto text-center text-white flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-6xl font-bold mb-4">Welcome to My Awesome Website</h1>
          <p className="text-2xl mb-8">
            Discover amazing places and connect with extraordinary people!
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-xl hover:bg-blue-600 transition duration-300 ease-in-out">
            Get Started
          </button>
          <p className="text-gray-300 mt-8 text-lg">
            Explore the extraordinary, one click at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
