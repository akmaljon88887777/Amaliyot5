import React from "react";

function ThreeCards() {
  return (
    <div className="flex justify-center gap-40 my-24 mt-96 mx-40">
      <div className="w-[300px] h-[96px] items-center rounded-xl bg-[#ffeee9] flex justify-center gap-6">
        <p className="text-[40px] font-extrabold text-[#f35525]">34</p>
        <p className="text-[16px] font-bold text-[#1e1e1e]">
          Buildings <br /> Finished Now
        </p>
        <span
          style={{ transform: "translate(47px,-47px)" }}
          className="w-[50px] flex justify-center  items-center h-[50px] bg-[#F35525] rounded-full"
        ></span>
      </div>
      <div className="w-[300px] h-[96px] items-center rounded-xl bg-[#ffeee9] flex justify-center gap-6">
        <p className="text-[40px] font-extrabold text-[#f35525]">12</p>
        <p className="text-[16px] font-bold text-[#1e1e1e]">
          Years <br /> Experience
        </p>
        <span
          style={{ transform: "translate(60px,-47px)" }}
          className="w-[50px] flex justify-center  items-center h-[50px] bg-[#F35525] rounded-full"
        ></span>
      </div>
      <div className="w-[300px] h-[96px] items-center rounded-xl bg-[#ffeee9] flex justify-center gap-6">
        <p className="text-[40px] font-extrabold text-[#f35525]">24</p>
        <p className="text-[16px] font-bold text-[#1e1e1e]">
          Awwards <br />
          Won 2023
        </p>
        <span
          style={{ transform: "translate(60px,-47px)" }}
          className="w-[50px] flex justify-center  items-center h-[50px] bg-[#F35525] rounded-full"
        ></span>
      </div>
    </div>
  );
}

export default ThreeCards;
