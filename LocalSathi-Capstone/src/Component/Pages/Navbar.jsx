import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
// import logo from '../assets/logo.png.png'

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()

  let handlelogoutbtn = () =>{
    let cookies = document.cookie.split("; ")
    cookies.forEach((el) => {
        let cookie = el.split("=")[0]
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure`
    })
    sessionStorage.setItem("loggedin", false)
    setShowDropdown(!showDropdown)
    navigate("/")
    window.location.reload()
  }

  let handleDropdown = () =>{
    setShowDropdown(!showDropdown)
  }

  return (
    <div>
      <div className='nav-container' >
        <nav>
          <div className='logo'>
            {/* <img src={logo} /> */}
            <h1>LocalSathi</h1>
          </div>
          <ul>

         <h4> <Link  to={"/"} > <li><a href="#">Menu</a></li></Link> </h4>

          <h4> <Link to={"/locationPage"}> <li><a href="#">Location</a></li></Link> </h4> 

          
         <h4>  <Link  to={"/ContactPage"} >  <li><a href="#">Contact</a></li> </Link> </h4>

          <h4> <Link to={"/PlacesSearchResult"} > <li><a href="#">Explore</a></li>  </Link> </h4> 

          </ul>
          {sessionStorage.getItem("loggedin") === "true" ?
            <div style={{ borderRadius: "50%", position: "relative", cursor:"pointer"}} onClick={handleDropdown}>
              <img src="https://placeholder.pics/svg/40" style={{ borderRadius: "50%" }} />
              <div style={{position:"absolute" , right:"0", boxShadow: "0px 0px 5px 5px rgba(173,173,173,1)"}}>
                <ul style={{ display: showDropdown ? "block" : "none", zIndex: 50, padding:"0px 20px" }}>
                  <li style={{marginBottom:"15px"}} onClick={()=>{navigate("/profile")}} >Profile</li>
                  <li onClick={handlelogoutbtn} >
                    Logout
                  </li>
                </ul>
              </div>
            </div> :
            <div>
              <Link to={"/SignInForm"} style={{ marginRight: "10px" }}><button>Login</button></Link>
              <Link to={"/UserOrGuide"} ><button>SignUp</button></Link>
            </div>
          }
        </nav>
      </div>
    </div>
  )
}

export default Navbar
