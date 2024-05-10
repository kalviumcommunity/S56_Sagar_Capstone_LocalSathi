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
        <Link to={"/Trial"} > <li><a href="#">explore</a></li>  </Link>  
         </ul>
        <div>
         <Link to={"/SignInForm"} style={{marginRight:"10px"}}><button>Login</button></Link>
         <Link to={"/UserOrGuide"} ><button>SignUp</button></Link>
        </div>
     </nav>
   </div>
 </div>
  )
}

export default Navbar
