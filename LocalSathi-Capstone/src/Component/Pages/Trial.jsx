

import React from 'react';
import './Trial.css';
import sampleimg2 from "../assets/logo.png.png"

const Trial = () => {
  return (
    <div className="profile-page">
      <header>
        <button>POST</button>
        <button>PROFILE EDIT</button>
      </header>

      <main>
        <div className="profile-header">
          <img src={sampleimg2} alt="Profile" className="profile-pic" />
          <h1>Louinib</h1>
          <button className="follow-button">FOLLOW</button>
        </div>

        <div className="user-info">
          <p>Name: Map Winner</p>
          <p>Measurements: 21%</p>
          <p>Points: 67%</p>
        </div>

        <div className="achievements">
          {['Bronze', 'Silver', 'Gold'].map((achievement, index) => (
            <img key={index} src={sampleimg2} alt={achievement} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Trial;
