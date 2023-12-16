import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import './Signup.css';
import profile from "./../assets/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";

export default function Signup({ CartItem }) {
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
  //  jsonArray1 = userData.concat(CartItem);

//console.log(Object.assign(userData, CartItem));
    try {
      fetch('https://www.talaini.tech/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.assign(userData, CartItem)),
      });
      //navigate('/login');

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
          <label>First Name:</label>
          <input type="text" name="first_name_User" value={userData.first_name_User} onChange={handleChange} /> <br/> <br/>
          <label>Last Name:</label>
          <input type="text" name="last_name_User" value={userData.last_name_User} onChange={handleChange} /> <br/> <br/>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} /> <br/> <br/>
          <label>Password:</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} /> <br/> <br/>
          <label>Phone:</label>
          <input type="text" name="phone" value={userData.phone} onChange={handleChange} /> <br/> <br/>
          <label>Address:</label>
          <input type="text" name="adresse" value={userData.adresse} onChange={handleChange} /> <br/> <br/>
          <label>Date of Birth:</label>
          <input type="text" name="dateofbirth_User" value={userData.dateofbirth_User} onChange={handleChange} /> <br/> <br/>
          <button type="button" onClick={handleSignup}>
            Comfirm Order
          </button>
  </div>
    </div>
   </div>
   </div>
  )
}
