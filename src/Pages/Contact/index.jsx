import React from "react";
import "../../App.css";
import Rasm from "../../Assets/email-icon.png";
import RAsm2 from "../../Assets/phone-icon.png";
function Contact() {
  const Shadow = {
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.15)",
  };
  return (
    <div>
      <div className="img justify-center flex flex-col items-center">
        <button className="w-[185.08px] h-[41px] bg-white text-black">
          Home / Properties
        </button>
        <div className="  text-white mt-3.5">
          <h3
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: "9000",
            }}
            className=" text-[48px] uppercase"
          >
            Contact US
          </h3>
        </div>
      </div>
      <div className="flex justify-center items-center mt-32 gap-36">
        <div className="">
          <div>
            <h4 className="uppercase text-[15px] border-l-[3px] border-l-[#EE626B] pl-1 font-bold text-[#ee626b]">
              Contact us
            </h4>
            <br />
            <h1 className="font-extrabold text-[40px]">
              Get In Touch <br /> With Our Agents
            </h1>
            <br />
            <p style={{ lineHeight: "28px" }} className="text-[14px]">
              When you really need to download free CSS templates, please
              remember our website <br /> TemplateMo. Also, tell your friends
              about our website. Thank you for visiting. There is a <br />
              variety of Bootstrap HTML CSS templates on our website. If you
              need more information,
              <br /> please contact us.
            </p>
            <br />
            <br />
            <div className="grid gap-4 mt-3">
              <div
                style={Shadow}
                className="w-[360px] h-[122px] rounded flex gap-4 items-center px-4"
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
                className="w-[360px] h-[122px] rounded flex gap-4 items-center px-4"
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
        </div>
        <div style={Shadow} className="w-[516px] h-[688.8px] rounded p-4">
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

      <div className="flex justify-center mt-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.990980646774!2d71.26316257529027!3d40.37438685821654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab8025bced7d%3A0xc22cdf6b8ee85751!2sCodemy!5e1!3m2!1sru!2s!4v1704916573230!5m2!1sru!2s"
          width="85%"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
