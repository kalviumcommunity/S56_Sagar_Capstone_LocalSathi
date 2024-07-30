import React from 'react'
import sampleimg2 from "../assets/logo.png.png"
import sampleimg from "../assets/sampleimg.jpg"
import food from "../assets/bankok-food.webp"
import fort from "../assets/forts.jpg"
import jungle from "../assets/jungletrek.jpg"
import market from '../assets/market.jpg'
import hillsstation from '../assets/hillsstation.jpg'
import stays from '../assets/stays.jpg'
const AllThingsTodo = () => {
  return (
    <div>
          <div className='section-7' >

<h1>Things to do</h1>
<p>Our locals will give you the best experiences that  has to offer.</p>
<div className='sec-7-grid' >
  <div className="sec-7-activity">
    <img alt="The 10 Tastings of Bangkok: Street Food" src={food} />
    <div className="sec-7-activity-details">
      <h2>The  Tastings of Street Food</h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
  <div className="sec-7-activity">
    <img alt="Explore the historical places" src={fort} />
    <div className="sec-7-activity-details">
      <h2>Explore  the historicals </h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
  <div className="sec-7-activity">
    <img alt="The 10 Tastings of Bangkok: Street Food" src={jungle} />
    <div className="sec-7-activity-details">
      <h2>Explore the jungle treks with locals</h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
  <div className="sec-7-activity">
    <img alt="The 10 Tastings of Bangkok: Street Food" src={market} />
    <div className="sec-7-activity-details">
      <h2>Explore the markets with locals</h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
  <div className="sec-7-activity">
    <img alt="The 10 Tastings of Bangkok: Street Food" src={hillsstation} />
    <div className="sec-7-activity-details">
      <h2>Explore the hillsstation </h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
  <div className="sec-7-activity">
    <img alt="The 10 Tastings of Bangkok: Street Food" src={stays} />
    <div className="sec-7-activity-details">
      <h2>Experiece the best stays </h2>
      <p className='sec-7-star-rating' >4.8 ★★★★☆ 832 reviews</p>
      <p>3 hours • food tours</p>
      <p className='sec-7-price'>from €40.89 per person</p>
    </div>
  </div>
</div>



</div>
    </div>
  )
}

export default AllThingsTodo
