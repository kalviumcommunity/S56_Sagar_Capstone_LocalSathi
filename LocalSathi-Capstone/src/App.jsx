import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import LandingPage from './Component/LandingPage'

import SignUpForm from './Component/SignUp'
import PlacesSearchResult from './Component/Pages/PlacesSearchResult'
import Trial from './Component/Pages/Trial'
import UserOrGuide from './Component/Pages/UserOrGuide'
import SignInForm from './Component/Pages/SignInForm' 

function App() {
  

  return (

    <Routes>
     <Route path='/' element={<LandingPage/>} /><Route/>
     <Route path='/PlacesSearchResult' element={<PlacesSearchResult/>} ></Route>
     <Route path='/Trial' element={<Trial/>}></Route>
     <Route path='/UserOrGuide' element={<UserOrGuide/>} ></Route>
     <Route path='/SignUpForm' element={<SignUpForm/>} /> <Route/>
     <Route path='/SignInForm' element={<SignInForm/>} /> <Route/>
    </Routes>
  )
}

export default App
