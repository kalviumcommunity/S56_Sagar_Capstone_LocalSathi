import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <div className='nav-container' >
     <nav>
         <div  className='logo'>
             <img src="Project-1-brandpage\BrandPage\src\Component\Images\brand_logo.png" alt="logo" />
         </div>
         <ul>
             <li><a href="#">menu</a></li>
             <li><a href="#">Location</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">explore</a></li>
         </ul>

         <Link to={"/SignUpForm"} ><button>Login</button></Link>
     </nav>
   </div>
 </div>
  )
}

export default Navbar
