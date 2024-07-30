import React from 'react';
import hero from "../assets/lastimg.webp"; 

function App() {
  return (
    <div>
    <div className='section-1'  >
   <div className='sec-1-1' >
     <h1>Explore the city with  <br />
       LocalSathi</h1>

   </div>
   <div className='sec-1-2' >
     <img src={hero} alt="" />
   </div>
 </div>
</div>
  );
}

export default App;
