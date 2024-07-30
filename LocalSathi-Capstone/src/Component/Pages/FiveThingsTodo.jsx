import React from 'react'
import sampleimg from "../assets/sampleimg.jpg"
import sampleimg2 from "../assets/logo.png.png"
import bankokFood from '../assets/bankok-food.webp'
import adventure from '../assets/adventure in bankok.jpg'
import hotels from "../assets/hotels.webp"
import holy  from "../assets/holy.jpg"
import { Link } from 'react-router-dom'

const FiveThingsTodo = () => {
  return (
    <div>
      
      <div  className='5-things-to-do' >



<h2> Things to do </h2>

<div className='sec-3-carousal'>


<div className="card">
  <img src={bankokFood} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>Explore the best street food</h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
   <Link to="/bookNow " > <button className="book-now-btn">Choose Your Guide</button></Link>
  </div>
</div>

<div className="card">
  <img   style={{height:"250px"}} src={adventure} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>Experience the thrill adventure  </h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
   <Link  to={"/bookAdventure"} > <button className="book-now-btn">Choose Your Guide</button></Link>
  </div>
</div>

<div className="card">
  <img src={hotels} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2} alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>Explore the luxury hotels </h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
   <Link  to={"/bookHotel"} ><button className="book-now-btn">Choose Your Guide</button></Link> 
  </div>
</div>
<div className="card">
  <img style={{height:"250px"
  }} src={holy} alt="Food" className="card-image" />
  <div className="card-content">
    <div className="choose-local">
      <img src={sampleimg2}  alt="Profile 1" className="profile-pic" />
      <img src={sampleimg2} alt="Profile 2" className="profile-pic" />
      Choose your local
    </div>
    <h3>Explore the holy places  </h3>
    <p>3 hours • food tours</p>
    <p>From €40.89 per person</p>
  <Link to="/sceneicPlace" > <button className="book-now-btn">Choose Your Guide</button></Link>
  </div>
</div>

</div>
</div>


    </div>
  )
}

export default FiveThingsTodo
