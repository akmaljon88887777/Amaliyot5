import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaMap } from "react-icons/fa";

import React from "react";

function NavbarOne() {
  return (
    <div className="flex w-full justify-between px-28 h-[50.8px] bg-white items-center border-b shadow-inner">
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-2">
          <GrMail color="#F35525" size={22} />
          info@company.com
        </div>
        <div className="flex items-center gap-2">
          <FaMap color="#F35525" size={22} />
          info@company.com
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[30px] h-[30px] rounded-full bg-[#CDCDCD] flex items-center justify-center">
          <FaFacebook />
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-[#CDCDCD] flex items-center justify-center">
          <BsTwitter />
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-[#CDCDCD] flex items-center justify-center">
          <AiFillLinkedin />
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-[#CDCDCD] flex items-center justify-center">
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
}

export default NavbarOne;
