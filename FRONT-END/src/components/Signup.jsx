import React from 'react'

import './Login.css';
import profile from "./../assets/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";
export default function Signup() {
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
          <h1>Signup</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="user name" className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="user name" className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="user name" className="name"/>
          </div>
         <div className="login-button-m">
         <button>Register</button>
         </div>
          
           <p className="link">
             <a href="#">Forgot password ?</a> Or<a href="/signup">Sign Up</a>
           </p>
          

        </div>
      </div>
      

    </div>
   </div></div>
  )
}

