import React, { useState, useEffect  } from 'react'
import {useNavigate} from 'react-router-dom';

import './Login.css';
import profile from "./../assets/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";
export default function Login() {
  const [userlogin, setUserData] = useState({
    'email': '',
    'password': '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    try {
      console.log({ userlogin });
      const response = await fetch('https://www.talaini.tech/api/v1/users/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userlogin }),
      });

          if (response.ok) {
         // Successful login, handle the response as needed
         const data = await response.json();
         console.log('Login successful!', data);
         // Do something with the data, e.g., navigate to another page
         // navigate('/');
       } else {
         // Handle login failure
         console.error('Login failed', response.status, response.statusText);
       }
     } catch (error) {
       console.error('Error during login:', error);
     }
  };
  return (
    <div><div className="main-m">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>


        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="password"  name="password" onChange={handleChange} className="name"/>
          </div>
         <div className="login-button-m">
         <button onClick={handleLogin}>Login</button>
         <a href="/infos">compte</a>
         </div>

           <p className="link">
             <a href="/signup">Forgot password ?</a> Or<a href="/signup">Sign Up</a>
           </p>


        </div>
      </div>


    </div>
   </div></div>
  )
}
