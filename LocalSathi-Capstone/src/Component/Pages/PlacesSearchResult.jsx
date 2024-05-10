import React from 'react'
import "./PlacesSearchResult.css"
import Navbar from "./Navbar"
import FiveThingsTodo from './FiveThingsTodo'
import SearchSectionOne from './SearchSectionOne'
import ChooseGuideCard from './ChooseGuideCard'
import WhyLocalSathi from './WhyLocalSathi'
import AllThingsTodo from './AllThingsTodo'
import ReviewSection from './ReviewSection'
import Footer from './Footer'

const PlacesSearchResult = () => {

  const backgroundImageUrl = 'https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0&h=220';




  return (
    <div>
      <Navbar />
      <SearchSectionOne/>

        <div className='section-2' >
        <h3>Whether you're a foodie, history lover, urban explorer or a traveling family. Enjoy Bangkok to the <br /> max with the best things to do in Bangkok with a local expert. The best thing? It's private & <br /> personalized - just for you!</h3>
      </div>

      <FiveThingsTodo/>

      <div className='section-4-static' >
        <h1>"We did our first LocalSathi tour when arriving to the city  <br /> and can highly recommend people to do the same."</h1>
      </div>

      <ChooseGuideCard/>
        <WhyLocalSathi/>
      <AllThingsTodo/>
    <ReviewSection/>
   <Footer/>
    </div>
  )
}

export default PlacesSearchResult














   


    


  





