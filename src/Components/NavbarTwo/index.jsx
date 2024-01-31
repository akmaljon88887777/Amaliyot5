import { Link } from "react-router-dom";
import "../../App.css";
import React, { useState, useEffect } from "react";
// import "./navbar";
function NavbarTwo() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 100;
      setShowScrollTop(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" ">
      <div
        style={{ paddingInline: "110px" }}
        className={`navbar ${
          showScrollTop
            ? "show-scroll-top fixed -mt-14 shadow-2xl py-10 w-full flex bg-white z-[999] h-[80px] items-center justify-between mt"
            : " w-full navbar pt-3 h-[100px] bg-white flex justify-between items-center"
        }`}
      >
        <div className=" flex">
          <Link style={{ textDecoration: "none" }} to="/">
            <p className="text-[28px] text-[#1B1B1B] font-bold">VILLA</p>
          </Link>
        </div>
        <div className="flex gap-16 items-center text-[15px] text-[#1e1e1e] font-medium">
          <Link
            style={{ textDecoration: "none" }}
            className="text-[#1e1e1e]"
            to="/"
          >
            <p className="hover:text-[#F35525]">Home</p>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-[#1e1e1e]"
            to="/about"
          >
            <p className="hover:text-[#F35525]">Properties</p>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-[#1e1e1e]"
            to="/portfolio"
          >
            <p className="hover:text-[#F35525]">Property Details</p>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-[#1e1e1e]"
            to="/contact"
          >
            <p className="hover:text-[#F35525]">Contact Us</p>
          </Link>
          <a href="#" style={{ textDecoration: "none" }}>
            <button className="w-[185.99px] flex items-center  h-[40px] bg-black mb-2 rounded-full text-white">
              <div className="w-[40px] h-[40px] items-center justify-center flex bg-[#F35525] rounded-full">
                <i class="fa fa-calendar"></i>
              </div>
              <span className="fkex items-center ml-5 hover:text-[#F35525]">
                Schedule a visit
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;
