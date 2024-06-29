import React from 'react'
import Navbar from './Pages/Navbar'
import Herosection from './Pages/Herosection'
import Explore from './Pages/Explore'
import SearchSection from './Pages/SearchSection'
import FiveThingsTodo from "./Pages/FiveThingsTodo"

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <FiveThingsTodo/>
      <Explore/>
      <SearchSection/>
    </div>
  )
}

export default LandingPage
