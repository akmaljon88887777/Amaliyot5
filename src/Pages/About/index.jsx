import { MdDoubleArrow } from "react-icons/md";
import React from "react";
import "../../App.css";
import AboutCArd from "./Card";
import Rasm1 from "../../Assets/property-01.jpg";
import Rasm2 from "../../Assets/property-02.jpg";
import Rasm3 from "../../Assets/property-03.jpg";
import Rasm4 from "../../Assets/property-04.jpg";
import Rasm5 from "../../Assets/property-05.jpg";
import Rasm6 from "../../Assets/property-06.jpg";
function About() {
  return (
    <div className="">
      <div className="img justify-center flex flex-col items-center">
        <button className="w-[185.08px] h-[41px] bg-white text-black">
          Home / Properties
        </button>
        <div className="  text-white mt-3.5">
          <h3 className="font-extrabold text-[48px] uppercase">Properties</h3>
        </div>
      </div>
      <div className=" flex flex-col justify-center">
        <div className="flex justify-center gap-4 mt-20">
          <button className="bg-[#F35525] text-white px-4 py-2.5 p-2.5 active:bg-[#F35525] hover:text-[#F35525] z-50 rounded">
            Show All
          </button>
          <button className="bg-[#1E1E1E] text-white px-4 py-2.5 p-2.5 active:bg-[#F35525] hover:text-[#F35525] z-50 rounded">
            Apartment
          </button>
          <button className="bg-[#1E1E1E] text-white px-4 py-2.5 p-2.5 active:bg-[#F35525] hover:text-[#F35525] z-50 rounded">
            Villa House
          </button>
          <button className="bg-[#1E1E1E] text-white px-4 py-2.5 p-2.5 active:bg-[#F35525] hover:text-[#F35525] z-50 rounded">
            Penthouse
          </button>
        </div>
        <br />
        <div className="my-14 grid justify-items-center gap-8 grid-cols-3 mx-28 ">
          <AboutCArd img={Rasm1} btntext="Luxury Villa" price="$2.264.000" />
          <AboutCArd img={Rasm2} btntext="Luxury Villa" price="$1.180.000" />
          <AboutCArd img={Rasm2} btntext="Luxury Villa" price="$1.460.000" />
          <AboutCArd img={Rasm3} btntext="Luxury Villa" price="$925.600" />
          <AboutCArd img={Rasm4} btntext="Luxury Villa" price="$450.000" />
          <AboutCArd img={Rasm5} btntext="Luxury Villa" price="$450.000 " />
          <AboutCArd img={Rasm6} btntext="Luxury Villa" price="$980.000" />
          <AboutCArd img={Rasm3} btntext="Luxury Villa" price="$1.520.000" />
          <AboutCArd img={Rasm2} btntext="Luxury Villa" price="$3.145.000" />
        </div>
        <br />
        <div className="flex justify-center gap-3 ">
          <div className="w-[40px] h-[40px] rounded-full bg-black active:bg-[#F35525] text-white flex justify-center items-center">
            1
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#F35525] active:bg-[#F35525] text-white flex justify-center items-center">
            2
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-black active:bg-[#F35525] text-white flex justify-center items-center">
            3
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-black active:bg-[#F35525] text-white flex justify-center items-center">
            <MdDoubleArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
