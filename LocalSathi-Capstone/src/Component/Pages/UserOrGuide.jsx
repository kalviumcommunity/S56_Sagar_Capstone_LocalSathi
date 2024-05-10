import React, { useState } from 'react';
import './UserOrGuide.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [role, setRole] = useState(''); 

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSignup = () => {
   
    console.log(`User selected role: ${role}`);
  
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Are you a tourist or a guide?</p>
      <div className="role-options">
        <label>
          <input
            type="radio"
            value="tourist"
            checked={role === 'tourist'}
            onChange={handleRoleChange}
            required 
          />
          Tourist
        </label>
        <label>
          <input
            type="radio"
            value="guide"
            checked={role === 'guide'}
            onChange={handleRoleChange}
            required 
          />
          Guide
        </label>
      </div>
      {/* Disable the button if no option is selected */}
      <Link to={role ? '/SignUpForm' : '/'}> 
        <button onClick={handleSignup} disabled={!role}>Sign Up</button>
      </Link>
    </div>
  );
};

export default SignupPage;
