import React, { useState } from 'react'

import './Login.css';
import profile from "./../assets/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://www.talaini.tech/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login, handle the response as needed
        console.log('Login successful!');
      } else {
        // Handle login failure
        console.error('Login failed');
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
            <input type="text" placeholder="user name" className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="user name" className="name"/>
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
