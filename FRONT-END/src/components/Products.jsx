import React, { useState } from "react"
import Footer from "./Footer";
import Navigation from "./Navigation";
import Data from "./Data"
import "./style.css"
const productItems = Data.productItems

const Productsection = ({ CartItem, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
 return (
    <div>
      <div><Navigation CartItem={CartItem}/> </div>
    <main className="shop background">
      <div className="product-content  grid1">

      {productItems.map((productItems) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{productItems.discount}% Off</span>
                <img src={productItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{productItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${productItems.price}.00 </h4>
                  {/* step : 3
                   if hami le button ma click garryo bahne
                  */}
                  <button onClick={() => addToCart(productItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      </div>


    </main>
    </div>
  );
};

export default Productsection;
