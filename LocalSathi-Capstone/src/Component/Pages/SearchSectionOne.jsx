import React from 'react'
import sampleimg from "../assets/guideandppl.jpg"


const SearchSectionOne = () => {
  return (
    <div>
         <div className='section-1'  >
        <div className='sec-1-1' >
          <h1>Experience the best of <br />
            Bangkok with LocalSathi</h1>

        </div>
        <div className='sec-1-2' >
          <img   style={{width:"600px",height:"300px"  }} src={sampleimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchSectionOne
