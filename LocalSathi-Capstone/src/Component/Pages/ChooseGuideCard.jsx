import React from 'react';
import './ChooseGuideCard.css';
import Navbar from './Navbar';
import Footer from './Footer';

const UniqueCardSection = () => {
  return (
    <>
      <section className="unique-section">
        <div className="unique-row">
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-a">
                <h1>Raman <br />Rajguru</h1>
                <span className="unique-price">$79</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-b">
                <h1>Manpreet<br />Rayka</h1>
                <span className="unique-price">$35</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-c">
                <h1>Yashraj<br />Ingale</h1>
                <span className="unique-price">$155</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="unique-footer">
        <Footer/>
      </footer>
    </>
  );
};

export default UniqueCardSection;
