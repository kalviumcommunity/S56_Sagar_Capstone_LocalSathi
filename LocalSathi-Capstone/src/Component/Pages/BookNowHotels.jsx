import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const BookNowHotels = () => {
  return (
    <div>
        <Navbar/>
        <h1 style={{textAlign:"center"}} >Discover Your Guide to Exploring the Best Hotels at Unbeatable Prices</h1>
        <section className="unique-section">
        <div className="unique-row">
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-a-hotel">
                <h1>Rohan<br />Bansode</h1>
                <span className="unique-price">$79</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-b-hotel">
                <h1>Tejas<br />Satav</h1>
                <span className="unique-price">$35</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-c-hotel">
                <h1>Amit <br />Hargude</h1>
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
    </div>
  )
}

export default BookNowHotels
