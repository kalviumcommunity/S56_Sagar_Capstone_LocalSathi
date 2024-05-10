import React from 'react'
import sampleimg2 from "../assets/logo.png.png"

const WhyLocalSathi = () => {
  return (
    <div>
          <div className='section-6' >

<div className="section-6-LocalSathi-banner">
  <img
    src={sampleimg2}
    alt="LocalSathi Logo"
    className="section-6-logo"
  />
  <h1 className="section-6-main-heading">Why you should book a LocalSathi tour</h1>
  <div className="section-6-features">
    <div className="section-6-feature">
      <img
        src={sampleimg2}
        alt="Customizable Icon"
        className="section-6-icon"
      />
      <p className="section-6-feature-text">
        100% Customizable
        <br />
        Let your local host tailor the tour completely to your wishes.
      </p>
    </div>
    <div className="section-6-feature">
      <img
        src={sampleimg2}
        alt="Private Tours Icon"
        className="section-6-icon"
      />
      <p className="section-6-feature-text">
        Private guided tours
        <br />
        No strangers on your tour. It’s just you and your local host.
      </p>
    </div>
    <div className="section-6-feature">
      <img
        src={sampleimg2}
        alt="Responsible Icon"
        className="section-6-icon"
      />
      <p className="section-6-feature-text">
        Responsible
        <br />
        Our tours are designed with people, places & the planet in mind.
      </p>
    </div>
  </div>
</div>


</div>
      
    </div>
  )
}

export default WhyLocalSathi
