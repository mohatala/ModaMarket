import Footer from "./Footer";
import Navigation from "./Navigation";

const HeroSection = ({ CartItem }) => {

 return (
    <div>
      <div><Navigation CartItem={CartItem}/> </div>
    <main className="hero container">
      <div className="hero-content">

      <h1 className="animated-text">BECAUSE YOU DESERVE THE BEST</h1>
        <p className="animated-text">
        "UNLEASH YOUR STYLE. DISCOVER THE PINNACLE OF FASHION, WHERE EVERY CLICK ELEVATES YOUR WARDROBE
        EXPERIENCE. SHOP SMART, SHOP MODA.MARKET."

        </p>

        <div className="hero-btn">
          <button ><a href="/products" className="shop-btn"> Shop Now</a></button>
        </div>

        <div className="shopping">
          <p></p>


        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero-image" />
      </div>

    </main>
    </div>
  );
};

export default HeroSection;
