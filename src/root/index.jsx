import React from "react";
import NavbarOne from "../Components/NavbarOne";
import NavbarTwo from "../Components/NavbarTwo";

import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <>
      <div>
        <NavbarOne />
        <NavbarTwo />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
