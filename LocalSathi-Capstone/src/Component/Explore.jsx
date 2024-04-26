import React from 'react'



import img1 from "../assets/wp7524639 1.png"
import img2 from "../assets/th 7.png"
import img3 from "../assets/th 8.png"
import img4 from "../assets/th 9.png"

const Explore = () => {
  return (
    <div>
      <div className='exp-pg' >
     <div className='exp-pg-subdiv' >
      <img className='exp' src={img1} alt="" />
      <h2>Foodie</h2>
      </div> 

      <div  className='exp-pg-subdiv'  >

      <img className='exp' src={img2} alt="" />
      <h2>Historical</h2>
      </div>

      <div className='exp-pg-subdiv' >

      <img className='exp' src={img3} alt="" />
      <h2>Adventure</h2>
      </div>

      <div className='exp-pg-subdiv' >

      <img className='exp' src={img4} alt="" />
      <h2>Explorer</h2>
      </div>
      </div>
      <hr />
    </div>
  )
}

export default Explore
