import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Rasm from "../../Assets/featured-icon.png";
import Rasm1 from "../../Assets/info-icon-01.png";
import Rasm2 from "../../Assets/info-icon-02.png";
import Rasm3 from "../../Assets/info-icon-03.png";
import Rasm4 from "../../Assets/info-icon-04.png";
import Rasm5 from "../../Assets/featured.jpg";
function Grid() {
  const Shadow = {
    boxShadow: " 0px 0px 15px rgba(0, 0, 0, 0.15)",
  };
  return (
    <div className="flex justify-center mx-[165px] my-32">
      <div>
        <img className="w-[415.99px] h-[498.26px]" src={Rasm5} alt="" />
        <div className="w-[110px] h-[110px] flex justify-center items-center rounded-full bg-[#F35525] z-50 absolute -mt-14 -ml-14">
          <img src={Rasm} alt="" />
        </div>
      </div>
      <div>
        <div className="pl-10">
          <p className="text-[#ee626b] text-[15px] font-bold">| Featured</p>
          <h4 className="text-[40px] font-bold">Best Appartament</h4>
        </div>
        <br />
        <br />
        <div className="w-[506px] h-[286.8px] mx-10">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header "
            >
              Accordion Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </div>
      </div>
      <div
        style={Shadow}
        className="w-[356px] h-[493.6px] rounded-lg p-[25px] text-black grid justify-items-center "
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
  );
}

export default Grid;
