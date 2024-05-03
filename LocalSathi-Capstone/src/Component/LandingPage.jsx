import React from 'react'
import Navbar from './Pages/Navbar'
import Herosection from './Pages/Herosection'
import Explore from './Pages/Explore'
import SearchSection from './Pages/SearchSection'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Explore/>
      <SearchSection/>
    </div>
  )
}

export default LandingPage
