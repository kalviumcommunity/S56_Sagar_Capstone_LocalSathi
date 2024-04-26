import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'
import Explore from './Component/Explore'
import SearchSection from './Component/SearchSection'

function App() {
  

  return (
    <>
      <Navbar/>
      <Herosection/>
      <Explore/>
      <SearchSection/>
    </>
  )
}

export default App
