import React from 'react'
import Navbar from './Navbar'
import ChooseGuideCard from './ChooseGuideCard'

const BookNowPage = () => {
  return (
    <div>
        <Navbar/>

        <h1 style={{textAlign:"center"}} > Discover the best places to eat in your area with our personalized guides.</h1>
        <ChooseGuideCard/>

      
    </div>
  )
}

export default BookNowPage
