import React from 'react'

const Navbar = () => {
  return (
    <div>
    <div className='nav-container' >
     <nav>
         <div  className='logo'>
             <img src="Project-1-brandpage\BrandPage\src\Component\Images\brand_logo.png" alt="logo" />
         </div>
         <ul>
             <li href="#" >Menu</li>
             <li href="#" >Location</li>
             <li  href="#" >About</li>
             <li  href="#" >Contact</li>
         </ul>

         <button>Login</button>
     </nav>
   </div>
 </div>
  )
}

export default Navbar
