import { useNavigate } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom"

const Navigation = ({ CartItem }) => {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate("/login");
  };
  const handleButtonClick = () => {
    navigate("/footer");
  };
  const handleButtonClick2 = () => {
    navigate("#");
  };
  return (
    <nav className="container">
      <div className="logo">
      <span>M</span>oda.<span className="sp2">Market</span>
        {/* <img    src="/images/brand_logo.png" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} /> */}
      </div>
      <ul>
        <li onClick={handleButtonClick2}>Menu</li>
        <li href="#">Location</li>
        <li onClick={handleButtonClick}>About</li>
        <li onClick={handleButtonClick}>Contact</li>
      </ul>

      <div className='cart'>
        <Link to='/cart'>
          <i className='fa fa-shopping-bag icon-circle'></i>
          <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
        </Link>
      </div>
      <button className="btn" onClick={handleButtonClick1}>Login now!</button>
    </nav>
  );
};

export default Navigation;
