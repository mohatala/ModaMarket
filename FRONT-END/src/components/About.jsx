import React, { useState } from "react"
import Footer from "./Footer";
import Navigation from "./Navigation";



const Aboutsection = ({ CartItem}) => {

 return (
    <div>

      <div><Navigation CartItem={CartItem}/> </div>
    <main className="about">
        <h1>About Us</h1>
        <div class="container">
              <div class="about-section">
                  <div class="about-text">
                      <h2>Welcome to Our Company</h2>
                      <p>
                          We are a passionate team dedicated to providing high-quality products/services to our customers. Our mission is to [briefly describe your mission or purpose].
                      </p>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at justo vel odio cursus elementum. Nulla facilisi.
                      </p>
                  </div>
              </div>
          </div>
    </main>
    </div>
  );
};

export default Aboutsection;
