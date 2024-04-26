import React from 'react'


import img2 from "../assets/th 12.png"
import img3 from "../assets/th 11.png"
import img4 from "../assets/th 13.png"
import img5 from "../assets/th 10.png"
const SearchSection = () => {
  return (
    <div>
        
<div   className='exp-main' style={{backgroundColor:"orange"}}  >


<div  className='Search-guide-left'>
                  
                      <div className='exp-img-1' >
                          <img id='person-1' src={img2} alt="" />
                      </div>
                    <div className='img-cont-search-sec' >
                      <div className='exp-img-2' >
                          <img id='person-2' src={img3} alt="" />

                      </div>
                      <div  className='exp-img-3'>

                          <img id='person-3' src={img4} alt="" />
                          <img id='person-4' src={img5} alt="" />
                      </div>
                        </div>  
                  
              </div>


              <div  className='Search-guide-right'  >
              <input type="text" placeholder="Search.."/>

              </div>

              </div>

              <hr />
      
    </div>
  )
}

export default SearchSection
