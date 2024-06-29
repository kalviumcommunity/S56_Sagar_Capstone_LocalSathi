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
    </Routes>
  )
}

export default App
