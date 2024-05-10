import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/th 1.png";
import img2 from "../assets/th 2.png";
import img3 from "../assets/th 3.png";
import img4 from "../assets/th 5.png";
import img5 from "../assets/th 4.png";

const Herosection = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='hero-main-section'>
        <div className='hero-main'>
          <div className='right-Section'>
            <div className='slogan-box' >
              <h2 className='line-1' >Explore like a local </h2>
              <h2 className='line-2' >with</h2>
              <h1 className='line-3' >LocalSathi</h1>
              <h3 style={{color:"red"}} >"Uncover your city's best-kept secrets with LocalSathi. Dive into local experiences and explore like a true insider"</h3>
            </div>
            <div>
              <div className="searchBox">
                <input className="searchInput" type="text" placeholder="Search something" />
               <Link to={"/PlacesSearchResult"} > <button className="searchButton" href="#"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <g clipPath="url(#clip0_2_17)">
                      <g filter="url(#filter0_d_2_17)">
                        <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges"></path>
                      </g>
                    </g>
                  </svg>
                </button></Link>
              </div>
            </div>
          </div>
          <div className='Left-section'>
            <div>
              <img id='fort' src={images[currentImageIndex]} alt="" />
            </div>
            <div>
              <div>
                <img id='food' src={images[(currentImageIndex + 1) % images.length]} alt="" />
                <img id='street' src={images[(currentImageIndex + 2) % images.length]} alt="" />
              </div>
              <div>
                <img id='hotels' src={images[(currentImageIndex + 3) % images.length]} alt="" />
                <img id='local' src={images[(currentImageIndex + 4) % images.length]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Herosection;
