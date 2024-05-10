import React from 'react'

const Footer = () => {
  return (
    <div>
         <div className='footer' >
      <footer style={{ backgroundColor: '#F9F5F2', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h4>About LocalSathi</h4>
          <ul>
            <li>Our Story</li>
            <li>Press</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Sustainability</li>
            <li>Destinations</li>
          </ul>
        </div>

      
        <div>
          <h4>Support for guests</h4>
          <ul>
            <li>Guest help center</li>
        
          </ul>
        
        </div>
      </div>

      <p>&copy; 2021 LocalSathi.com | Privacy Policy | Terms & Conditions | Cookies | Sitemap</p>

      
    </footer>
      </div>
    </div>
  )
}

export default Footer
