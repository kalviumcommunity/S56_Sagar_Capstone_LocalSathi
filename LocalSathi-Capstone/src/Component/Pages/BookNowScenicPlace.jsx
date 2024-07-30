import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const BookNowScenicPlace = () => {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign:"center"}} >Discover Your Guide to Viewing the Most Wonderful Sites Near You.</h1>
      <section className="unique-section">
        <div className="unique-row">
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-a-scenic">
                <h1>Kunal<br />Gaikwad</h1>
                <span className="unique-price">$79</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-b-scenic">
                <h1>Takesh<br />Ghokhse</h1>
                <span className="unique-price">$35</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-c-scenic">
                <h1>Uday<br />Chavan</h1>
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

export default BookNowScenicPlace
