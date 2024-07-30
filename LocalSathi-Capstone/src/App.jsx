import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import LandingPage from './Component/LandingPage'

import UserSignUpForm from './Component/SignUp'
import PlacesSearchResult from './Component/Pages/PlacesSearchResult'
import Trial from './Component/Pages/Trial'
import UserOrGuide from './Component/Pages/UserOrGuide'
import SignInForm from './Component/Pages/SignInForm' 
import LocationSearchPage from './Component/Pages/LocationSearchPage'
import GuideSignUpForm from './Component/GuideSignUpForm'
import ContactPage from './Component/Pages/ContactPage'
import BookNowPage from './Component/Pages/BookNowPage'
import BookNowAdventure from './Component/Pages/BookNowAdventure'
import BookNowHotels from './Component/Pages/BookNowHotels'
import BookNowScenicPlace from './Component/Pages/BookNowScenicPlace'
function App() {
  

  return (
    <Routes>
     <Route path='/' element={<LandingPage/>} /><Route/>
     <Route path='/PlacesSearchResult' element={<PlacesSearchResult/>} ></Route>
     <Route path='/profile' element={<Trial/>}></Route>
     <Route path='/UserOrGuide' element={<UserOrGuide/>} ></Route>
     <Route path='/SignUpForm' element={<UserSignUpForm/>} /> <Route/>
     <Route path='/guideSignup' element={<GuideSignUpForm />} />
     <Route path='/SignInForm' element={<SignInForm/>} /> <Route/>
     <Route path='/locationPage' element={<LocationSearchPage/>} ></Route>
     <Route path='/ContactPage' element={<ContactPage/>} ></Route>
     <Route path='/bookNow' element={<BookNowPage/>}></Route>
     <Route path='/bookAdventure' element={<BookNowAdventure/>} ></Route>
     <Route path='/bookHotel' element={<BookNowHotels/>}></Route>
     <Route path='/sceneicPlace' element={<BookNowScenicPlace/>} ></Route>

    </Routes>
  )
}

export default App
