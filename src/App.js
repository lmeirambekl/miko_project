import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Drinks from './Pages/Market/Drinks';
import Gastronomy from './Pages/Market/Gastronomy';
import Grocery from './Pages/Market/Grocery';
import Non from './Pages/Market/Grocery';
import VAFD from './Pages/Market/VAFD';
import Market from './Pages/Market/Market';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';




function App() {
  return (
    
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/gastronomy" element={<Gastronomy />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/non" element={<Non />} />
        <Route path="/vafd" element={<VAFD />} />
        <Route path="/market" element={<Market />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
