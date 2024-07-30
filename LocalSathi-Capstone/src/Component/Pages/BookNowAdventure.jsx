import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './ChooseGuideCard.css'


const BookNowAdventure = () => {
  return (
    <div>
         <Navbar/>
         <h1 style={{textAlign:"center"}} >Find the best places for your next adrenaline rush with our personalized adventure guides.</h1>
         <section className="unique-section">
        <div className="unique-row">
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-a-adventure">
                <h1>Omkar<br />Bansal</h1>
                <span className="unique-price">$79</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-b-adventure">
                <h1>Sujal<br />Kapre</h1>
                <span className="unique-price">$35</span>
                <div className="unique-card-back">
                  <a href="#">Contact:9838821112</a>
                </div>
              </div>
            </div>
          </div>
          <div className="unique-col">
            <div className="unique-card">
              <div className="unique-cover unique-item-c-adventure">
                <h1>Muzaffar<br />sheikh</h1>
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

export default BookNowAdventure
