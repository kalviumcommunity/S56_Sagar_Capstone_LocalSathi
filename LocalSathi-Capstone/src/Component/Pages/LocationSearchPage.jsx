import React, { useState } from 'react';
import './LocationSearchStyles.css'; // Updated CSS file name
import Navbar from './Navbar';

const LocationSearch = () => {
  const [showAllCities, setShowAllCities] = useState(false);

  const popularCities = [
    { name: 'Mumbai', icon: '🏰' },
    { name: 'Delhi-NCR', icon: '⛩️' },
    { name: 'Bengaluru', icon: '🏢' },
    { name: 'Hyderabad', icon: '🏯' },
    { name: 'Chandigarh', icon: '🗿' },
    { name: 'Ahmedabad', icon: '🏙️' },
    { name: 'Chennai', icon: '⛪' },
    { name: 'Pune', icon: '🏫' },
    { name: 'Kolkata', icon: '⛪' },
    { name: 'Kochi', icon: '🌴' },
  ];

  const otherCities = [
    'Aalo', 'Abohar', 'Abu Road', 'Achampet', 'Acharapakkam', 'Addanki', 'Adilabad', 'Adimali', 'Adipur', 'Adoni',
    'Agar Malwa', 'Agartala', 'Agiripalli', 'Agra', 'Ahmedgarh', 'Ahmednagar', 'Ahore', 'Aizawl', 'Ajmer', 'Akaltara',
    'Akbarpur', 'Akividu', 'Akluj', 'Akola', 'Akot', 'Alakode', 'Alangunj', 'Alangulam', 'Alappuzha', 'Alattur',
    'Alibaug', 'Aligarh', 'Alipurduar', 'Almora', 'Alsisar (Rajasthan)',
  ];

  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };

  return (
    <div>
      <Navbar/>
    <div className="search-container">
      <input type="text" placeholder="Search for your city" />
      <button className="detect-button">Detect my location</button>

      <h2>Popular Cities</h2>
      <div className="popular-cities">
        {popularCities.map((city) => (
          <div className="city" key={city.name}>
            <span className="city-icon">{city.icon}</span>
            <span className="city-name">{city.name}</span>
          </div>
        ))}
      </div>

      <h2>Other Cities</h2>
      <div className="other-cities-container">
        {showAllCities
          ? otherCities.map((city, index) => <span key={index}>{city}</span>)
          : otherCities.slice(0, 9).map((city, index) => <span key={index}>{city}</span>)}
      </div>

      <button className="toggle-button" onClick={toggleShowAllCities}>
        {showAllCities ? 'Hide All Cities' : 'Show All Cities'}
      </button>
    </div>
    </div>
  );
};

export default LocationSearch;
