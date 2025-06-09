import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Homepage from "./Landing_page/home/Homepage.jsx";
import Signup from "./Landing_page/signup/Signup.jsx";
import Aboutpage from "./Landing_page/about/Aboutpage.jsx";
import Productspage from "./Landing_page/products/Productspage.jsx";
import Pricing from "./Landing_page/pricing/Pricing.jsx";
import Support from "./Landing_page/support/Support.jsx";
import Navbar from "./Landing_page/Navbar.jsx";
import Footer from "./Landing_page/Footer.jsx";
import Notfound from "./Landing_page/Notfound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
      <Route path="/products" element={<Productspage></Productspage>}></Route>
      <Route path="/pricing" element={<Pricing></Pricing>}></Route>
      <Route path="/support" element={<Support></Support>}></Route>
      <Route path="/*" element={<Notfound></Notfound>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
