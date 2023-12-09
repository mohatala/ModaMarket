import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import './Login.css';
import profile from "./../assets/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";
export default function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    adresse: '',
    dateofbirth_User: '',
    email: '',
    first_name_User: '',
    last_name_User: '',
    password: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    // Add your logic to handle the signup, such as sending the data to an API
    try {
      fetch('https://www.talaini.tech/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      navigate('/login');

    } catch (error) {
      console.error('Error during login:', error);
    }
    //console.log('Signup data:', userData);
  };
  return (
    <div>
    <div className="main-m">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>
          </div>
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name_User" value={userData.first_name_User} onChange={handleChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name_User" value={userData.last_name_User} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="adresse" value={userData.adresse} onChange={handleChange} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="text" name="dateofbirth_User" value={userData.dateofbirth_User} onChange={handleChange} />
        </div>
        <div>
          <button type="button" onClick={handleSignup}>
            Signup
          </button>
        </div>

  </div>
    </div>
   </div>
   </div>
  )
}
