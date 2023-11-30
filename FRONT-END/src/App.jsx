
import React, { useState } from "react"
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Productsection from "./components/Products";
import Navigation from "./components/Navigation";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Cart from "./components/Cart/Cart"
import Data from "./components/Data"


export default function App() {
  const { productItems } = Data.productItems
  const [CartItem, setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HeroSection CartItem={CartItem} />}/>
        <Route path="/products"  element={<Productsection CartItem={CartItem} productItems={productItems} addToCart={addToCart} />}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>

         {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const App = () => {
//   return (
//     <div>
//       <HeroSection />
//     </div>
//   );
// };

// export default App;
