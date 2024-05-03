import React from 'react'
import img1 from "../assets/th 1.png"
import img2 from "../assets/th 2.png"
import img3 from "../assets/th 3.png"
import img4 from "../assets/th 5.png"
import img5 from "../assets/th 4.png"
const Herosection = () => {
  return (
    <>
    <div className='hero-main-section'>
          <div className='hero-main'>
              <div className='right-Section'>
                <div className='slogan-box' >

                  <h2  className='line-1' >Explore like a local </h2>
                  <h2  className='line-2' >with</h2>
                  <h1  className='line-3' >LocalSathi</h1>
                </div>
              </div>
              <div className='Left-section'>
                  <div>
                      <img id='fort' src={img1} alt="" />
                  </div>

                  <div>


                      <div>


                          <img id='food' src={img2} alt="" />
                          <img id='street' src={img3} alt="" />
                      </div>
                      <div>

                          <img id='hotels' src={img4} alt="" />
                          <img id='local' src={img5} alt="" />
                      </div>
                  </div>
              </div>
          </div>
      </div><hr />
      </>
    
  )
}

export default Herosection
