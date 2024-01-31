import "../../App.css";
import Rasm from "../../Assets/single-property.jpg";
import Rasm1 from "../../Assets/info-icon-01.png";
import Rasm2 from "../../Assets/info-icon-02.png";
import Rasm3 from "../../Assets/info-icon-03.png";
import Rasm4 from "../../Assets/info-icon-04.png";
import Rasm5 from "../../Assets/deal-01.jpg";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
function Portfolio() {
  const Shadow = {
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.15)",
  };
  return (
    <div className="text-white">
      <div className="img justify-center flex flex-col items-center">
        <button className="w-[200px] text-[14px] font-semibold h-[41px] bg-white text-black">
          Home / SINGLE PROPERTY
        </button>
        <div className="  text-white mt-3.5">
          <h3
            style={{
              // fontFamily: "Poppins,sans-serif",
              fontWeight: "900",
            }}
            className=" text-[48px] uppercase"
          >
            SINGLE PROPERTY
          </h3>
        </div>
      </div>
      <div className="flex justify-center mt-32 gap-24">
        <div>
          <img className="w-[855.99px] h-[476.63px]" src={Rasm} alt="" />
        </div>
        <div
          style={Shadow}
          className="w-[355.99px] h-[493.6px] rounded-lg p-[25px] text-black grid justify-items-center "
        >
          <div className="flex items-center gap-4">
            <div>
              <img src={Rasm1} alt="" />
            </div>
            <div className="grid ">
              <div>
                <h4 className="text-[22px]">
                  450 m2
                  <br />
                  <span className="text-[15px] text-[#aaa] font-normal">
                    Total Flat Space
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <br />
          <div className="flex items-center gap-4">
            <div>
              <img src={Rasm2} alt="" />
            </div>
            <div className="grid ">
              <div>
                <h4 className="text-[22px]">
                  450 m2
                  <br />
                  <span className="text-[15px] text-[#aaa] font-normal">
                    Total Flat Space
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <br />
          <div className="flex items-center gap-4">
            <div>
              <img src={Rasm3} alt="" />
            </div>
            <div className="grid ">
              <div>
                <h4 className="text-[22px]">
                  450 m2
                  <br />
                  <span className="text-[15px] text-[#aaa] font-normal">
                    Total Flat Space
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <br />
          <div className="flex items-center gap-4">
            <div>
              <img src={Rasm4} alt="" />
            </div>
            <div className="grid ">
              <div>
                <h4 className="text-[22px]">
                  450 m2
                  <br />
                  <span className="text-[15px] text-[#aaa] font-normal">
                    Total Flat Space
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <div className="text-black mx-28">
        <div>
          <div className="w-[105.1px] h-[31px] bg-[#fbd9cf] rounded flex justify-center items-center text-[14px] font-medium">
            Apparment
          </div>
          <br />
          <h1 className="text-[25px] font-bold border-b pb-12 mb-12">
            24 New Street Miami, OR 24560
          </h1>
          <p className="text-[14px]">
            Get <strong>the best villa agency</strong> HTML CSS Bootstrap
            Template for your company website. TemplateMo provides you the{" "}
            <a
              href="https://www.google.com/search?q=best+free+css+templates"
              target="_blank"
              className="text-[#0D6EFD] px-2"
            >
              best <br /> free CSS templates
            </a>
            in the world. Please tell your friends about it. Thank you. Cloud
            bread kogi bitters pitchfork shoreditch <br /> tumblr yr succulents
            single-origin coffee schlitz enamel pin you probably haven't heard
            of them ugh hella.
            <br />
            <br />
            When you look for free CSS templates, you can simply type TemplateMo
            in any search engine website. In addition, you can <br /> type
            TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
            Master cleanse +1 intelligentsia swag post-ironic, <br /> slow-carb
            chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie
            pop-up.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="w-[57%] ml-28">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Accordion Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
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

export default Portfolio;
