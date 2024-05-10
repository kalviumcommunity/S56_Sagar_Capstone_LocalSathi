import React from 'react'
import sampleimg from "../assets/sampleimg.jpg"

const SearchSectionOne = () => {
  return (
    <div>
         <div className='section-1'  >
        <div className='sec-1-1' >
          <h1>Experience the best of <br />
            Bangkok with LocalSathi</h1>

        </div>
        <div className='sec-1-2' >
          <img src={sampleimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SearchSectionOne
