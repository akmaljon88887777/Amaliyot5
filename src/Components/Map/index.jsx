import React from "react";
import "../../App.css";
import Rasm from "../../Assets/email-icon.png";
import RAsm2 from "../../Assets/phone-icon.png";
function Map() {
  const Shadow = {
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.15)",
  };
  return (
    <div>
      <div className="Map ">
        <div className="grid justify-items-center pt-24">
          <p className="text-[15px] text-[#EE626b] uppercase font-bold">
            | Contact US
          </p>
          <br />
          <h1 className="text-center text-[40px] text-white font-extrabold">
            Get In Touch With <br /> Our Agents
          </h1>
          <br />
          <br />
        </div>
        <div className="flex w-full justify-center gap-14">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.990980646774!2d71.26316257529027!3d40.37438685821654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab8025bced7d%3A0xc22cdf6b8ee85751!2sCodemy!5e1!3m2!1sru!2s!4v1704916573230!5m2!1sru!2s"
              width="746px"
              height="500px"
              allowfullscreen=""
              loading="lazy"
              className="rounded-lg"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <br />
            <div className=" gap-12 mt-4 flex">
              <div
                style={Shadow}
                className="w-[347px] h-[122px] rounded flex gap-4 items-center px-4"
              >
                <div>
                  <img src={RAsm2} alt="" />
                </div>
                <div className="grid items-center">
                  <p className=" text-[20px] font-bold">010-020-0340</p>
                  <p className="text-[#aaaaaa]">Phone Number</p>
                </div>
              </div>
              <div
                style={Shadow}
                className="w-[347px] h-[122px] rounded flex gap-4 items-center px-4"
              >
                <div>
                  <img src={Rasm} alt="" />
                </div>
                <div className="grid items-center">
                  <p className=" text-[20px] font-bold">010-020-0340</p>
                  <p className="text-[#aaaaaa]">Phone Number</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={Shadow}
            className="w-[516px] h-[665px] bg-white rounded p-4"
          >
            <label htmlFor="">
              Full Name
              <input
                type="text"
                className="w-[456px] h-[44px] bg-[#f6f6f6] rounded-full mt-3 px-3"
                placeholder="Your Name..."
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              Email Address
              <input
                type="text"
                className="w-[456px] h-[44px] bg-[#f6f6f6] rounded-full mt-3 px-3"
                placeholder="Your Name..."
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              Subject
              <input
                type="text"
                className="w-[456px] h-[44px] bg-[#f6f6f6] rounded-full mt-3 px-3"
                placeholder="Your Name..."
              />
            </label>
            <br />
            <br />
            <label htmlFor="">
              Message
              <input
                type="text"
                className="w-[456px] h-[150px] bg-[#f6f6f6] rounded-xl mt-3 px-3 flex"
                placeholder="Your Name..."
              />
            </label>

            <button className="w-[150.23px] z-50 h-[44px] rounded-full bg-[#1e1e1e] text-white mt-12">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
