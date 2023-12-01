import React, { useState } from "react"
import Footer from "./Footer";
import Navigation from "./Navigation";



const Contactsection = ({ CartItem}) => {

 return (
    <div>

      <div><Navigation CartItem={CartItem}/> </div>
    <main className="contact">
        <h1>Contact Us</h1>
        <div class="container">
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
    </main>
    </div>
  );
};

export default Contactsection;
