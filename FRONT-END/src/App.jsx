
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/footer" element={<Footer />}/>

           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<Signup/>} />
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
