import { useNavigate } from "react-router-dom";
import React from 'react'
import { Link } from "react-router-dom"

const Navigation = ({ CartItem }) => {
  const navigate = useNavigate();

  const home_btn = () => {
    navigate("/");
  };
  const login_btn = () => {
    navigate("/products");
  };
  const location_btn = () => {
    navigate("/location");
  };
  const menu_btn = () => {
    navigate("/products");
  };
  const about_btn = () => {
    navigate("/about");
  };
  const contact_btn = () => {
    navigate("/contact");
  };
  return (
    <nav className="container">
      <div className="logo" onClick={home_btn}>
      <span>M</span>oda.<span className="sp2">Market</span>
        {/* <img    src="/images/brand_logo.png" alt="logo" style={{ maxWidth: '100%', height: 'auto' }} /> */}
      </div>
      <ul>
        <li onClick={location_btn}>Location</li>
        <li onClick={about_btn}>About</li>
        <li onClick={contact_btn}>Contact</li>
      </ul>

      <div className='cart'>
        <Link to='/cart'>
          <i className='fa fa-shopping-bag icon-circle'></i>
          <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
        </Link>
      </div>

      <button className="btn" onClick={login_btn}>Shop now!</button>
    </nav>
  );
};

export default Navigation;
