import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import LandingPage from './Component/LandingPage'

import SignUpForm from './Component/SignUp'
function App() {
  

  return (

    <Routes>
     <Route path='/' element={<LandingPage/>} />
     <Route path='/SignUpForm' element={<SignUpForm/>} />
    </Routes>
  )
}

export default App
