import { BsFillPlayFill } from "react-icons/bs";

import React from "react";
import "../../App.css";

function Video() {
  const Outline = {
    outline: " 15px solid rgba(254, 85, 37, 0.5)",
  };
  return (
    <div>
      <div className="w-full h-[626px] videoimg grid justify-items-center">
        <div className=" py-32 text-center font-bold">
          <h4 className="text-[16px] font-bold text-[#ee626b]">| VIDEO VIEW</h4>
          <h1
            style={{ lineHeight: "1.5", fontFamily: "Poppins, sans-serf" }}
            className="text-[40px] font-black text-white"
          >
            Get Closer View & <br /> Different Feeling
          </h1>
          <br />
        </div>
        <div className="-mt-10 rasm flex justify-center items-center">
          <a href="https://www.youtube.com">
            <div
              style={Outline}
              className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-white cursor-pointer"
            >
              <BsFillPlayFill color="#f35525" size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Video;
