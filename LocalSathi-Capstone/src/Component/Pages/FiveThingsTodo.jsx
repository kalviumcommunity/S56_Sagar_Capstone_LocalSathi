import React from 'react'
import sampleimg from "../assets/sampleimg.jpg"
import sampleimg2 from "../assets/logo.png.png"

const FiveThingsTodo = () => {
  return (
    <div>
      
      <div  className='5-things-to-do' >



<h2>5 Things to do in Bankok</h2>

<div className='sec-3-carousal'>


<div className="card">
  <img src={sampleimg} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>The 10 Tastings of Bangkok: Street Food</h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
    <button className="book-now-btn">Book now</button>
  </div>
</div>

<div className="card">
  <img src={sampleimg} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>The 10 Tastings of Bangkok: Street Food</h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
    <button className="book-now-btn">Book now</button>
  </div>
</div>

<div className="card">
  <img src={sampleimg} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>The 10 Tastings of Bangkok: Street Food</h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
    <button className="book-now-btn">Book now</button>
  </div>
</div>
<div className="card">
  <img src={sampleimg} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>The 10 Tastings of Bangkok: Street Food</h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
    <button className="book-now-btn">Book now</button>
  </div>
</div>

</div>
</div>


    </div>
  )
}

export default FiveThingsTodo
