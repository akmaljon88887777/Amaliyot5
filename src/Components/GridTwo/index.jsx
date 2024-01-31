import Rasm from "../../Assets/deal-01.jpg";
import Rasm5 from "../../Assets/deal-01.jpg";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
function GRidTwo() {
  const Shadow = {
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.15)",
  };
  return (
    <div className="bg-[#FAFAFA] grid justify-items-center pb-52 ">
      <div className="w-full justify-center flex pt-24">
        <div className="w-[85%] py-24 text-black flex justify-between">
          <div>
            <div className="text-[#ee626b] font-bold">| BEST DEAL</div>
            <h4 className="text-[40px] font-bold">
              Find Your Best Deal <br /> Right Now!
            </h4>
          </div>
          <div className="gap-4 flex">
            <button className="w-[150.23px] h-[50px] text-[#fff] bg-[#1e1e1e] rounded-md text-[16px]">
              Appartment
            </button>
            <button className="w-[150.23px] h-[50px] text-[#fff] bg-[#1e1e1e] rounded-md text-[16px]">
              Villa House
            </button>
            <button className="w-[150.23px] h-[50px] text-[#fff] bg-[#1e1e1e] rounded-md text-[16px]">
              Penthouse
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-black gap-20">
        <div
          className="w-[306px] h-[377.7px] rounded px-4 pt-2  grid items-center"
          style={Shadow}
        >
          <li
            type="none"
            className="text-[#aaa] justify-between flex border-b p-4"
          >
            Total Flat Space
            <span className="text-[20px] font-bold text-[#1e1e1e]">540 m2</span>
          </li>
          <li
            type="none"
            className="text-[#aaa] justify-between flex border-b p-4"
          >
            Total Flat Space
            <span className="text-[20px] font-bold text-[#1e1e1e]">3</span>
          </li>
          <li
            type="none"
            className="text-[#aaa] justify-between flex border-b p-4"
          >
            Total Flat Space
            <span className="text-[20px] font-bold text-[#1e1e1e]">8</span>
          </li>
          <li
            type="none"
            className="text-[#aaa] justify-between flex border-b p-4"
          >
            Total Flat Space
            <span className="text-[20px] font-bold text-[#1e1e1e]">Yes</span>
          </li>
          <li type="none" className="text-[#aaa] justify-between flex pb-1">
            Total Flat Space
            <span className="text-[20px] font-bold text-[#1e1e1e]">Bank</span>
          </li>
        </div>
        <div>
          <img src={Rasm5} alt="" />
        </div>
        <div className="w-[330px]">
          <div>
            <h4 className="text-[17px] font-semibold">
              All Info About Apartment
            </h4>
            <br />
            <p
              style={{ lineHeight: "28px" }}
              className="text-[14px] text-[#4a4a4a] font-medium"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse.
            </p>
            <p
              style={{ lineHeight: "28px" }}
              className="text-[14px] text-[#4a4a4a] font-medium"
            >
              Swag fanny pack lyft blog twee. JOMO <br /> ethical copper mug,
              succulents typewriter shaman DIY kitsch twee taiyaki fixie hella
              venmo after messenger poutine next level humblebrag swag franzen.
            </p>
            <br />
            <button className="w-[206.74px] h-[50px] rounded-full bg-[#1e1e1e] flex items-center gap-3 text-white">
              <span className="fa fa-calendar w-[50px] h-[50px] rounded-full text-center justify-center items-center bg-[#F35525] flex "></span>
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GRidTwo;
