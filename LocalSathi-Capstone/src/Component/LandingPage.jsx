import React from 'react'
import Navbar from './Pages/Navbar'
import Herosection from './Pages/Herosection'

import FiveThingsTodo from "./Pages/FiveThingsTodo"
import Footer from './Pages/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <FiveThingsTodo/>
      <div className='section-4-static' >
        <h1  style={{height:"-5vw"}}  >"We did our first LocalSathi tour when arriving to the city  <br /> and can highly recommend people to do the same."</h1>
      </div>
      {/* <Explore/> */}
      {/* <SearchSection/> */}

      <Footer/>
    </div>
  )
}

export default LandingPage
