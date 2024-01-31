import React from "react";
import Cards from "./Card";
import Rasm1 from "../../Assets/property-01.jpg";
import Rasm2 from "../../Assets/property-02.jpg";
import Rasm3 from "../../Assets/property-03.jpg";
import Rasm4 from "../../Assets/property-04.jpg";
import Rasm5 from "../../Assets/property-05.jpg";
import Rasm6 from "../../Assets/property-06.jpg";
function Index() {
  return (
    <div className=" grid justify-items-center gap-8 grid-cols-3 mx-28 ">
      <Cards img={Rasm1} btntext="Luxury Villa" price="$2.264.000" />
      <Cards img={Rasm2} btntext="Luxury Villa" price="$1.180.000" />
      <Cards img={Rasm2} btntext="Luxury Villa" price="$1.460.000" />
      <Cards img={Rasm3} btntext="Luxury Villa" price="$925.600" />
      <Cards img={Rasm4} btntext="Luxury Villa" price="$450.000" />
      <Cards img={Rasm5} btntext="Luxury Villa" price="$450.000 " />
    </div>
  );
}

export default Index;
