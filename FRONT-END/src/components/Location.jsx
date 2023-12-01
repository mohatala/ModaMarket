import React, { useState } from "react"
import Footer from "./Footer";
import Navigation from "./Navigation";



const Locationsection = ({ CartItem}) => {

 return (
    <div>

      <div><Navigation CartItem={CartItem}/> </div>
    <main className="location">
        <h1>Our Location</h1>
              <div class="container">
                      <div id="map">
                      <div class="mapouter">
                      <div class="gmap_canvas">
                      <iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                      </div>
                      </div>

                      <h2>Visit Us</h2>
                      <p>
                          Address: 123 Main Street, Cityville, Country
                          Phone: (123) 456-7890
                      </p>
              </div>
    </main>
    </div>
  );
};

export default Locationsection;
