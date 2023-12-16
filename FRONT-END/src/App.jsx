
import React, { useState } from "react"
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Productsection from "./components/Products";
import Locationsection from "./components/Location"
import Aboutsection from "./components/About"
import Contactsection from "./components/Contact"
import Navigation from "./components/Navigation";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";
import Compte from "./components/Compte";
import Cart from "./components/Cart/Cart"
import Data from "./components/Data"
import Infos from "./components/cmp/Infos"
import CmdDetailsComponent from "./components/cmp/Details_cmd"
import CommandeComponent from "./components/cmp/Vos_commandes"
import ChangePasswordComponent from "./components/cmp/newpass"

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
        <Route path="/compte" element={<Compte CartItem={CartItem}/>} />
        <Route path='/cart' element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}/>
        <Route path="/location"  element={<Locationsection CartItem={CartItem} />}/>
        <Route path="/about"  element={<Aboutsection CartItem={CartItem} />}/>
        <Route path="/contact"  element={<Contactsection CartItem={CartItem} />}/>
        <Route path="/infos" element={<Infos CartItem={CartItem}/>} />
        <Route path="/dcmd" element={<CmdDetailsComponent CartItem={CartItem}/>} />
        <Route path="/orders" element={<CommandeComponent CartItem={CartItem}/>} />
        <Route path="/npass" element={<ChangePasswordComponent CartItem={CartItem}/>} />
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
