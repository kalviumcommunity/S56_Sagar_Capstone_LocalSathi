import React, { useState } from 'react';
import './ContactPage.css'; // Assuming you save the CSS separately
import Footer from './Footer';
import Navbar from './Navbar'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (


    <div>
        <Navbar/>
    <section className="formcarry-container">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-name">Full Name</label>
          <input
            type="text"
            name="name"
            id="fc-generated-1-name"
            placeholder="Your first and last name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-email">Your Email Address</label>
          <input
            type="email"
            name="email"
            id="fc-generated-1-email"
            placeholder="john@doe.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="formcarry-block">
          <label htmlFor="fc-generated-1-message">Your message</label>
          <textarea
            name="message"
            id="fc-generated-1-message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        
        <div className="formcarry-block">
          <button type="submit">Send</button>
        </div>
      
      </form>
    </section>
    <Footer/>
    </div>
  );
};

export default Form;
