import React from "react";
import Carousel from "../../Components/Carousel";
import Grid from "../../Components/Grid";
import Video from "../../Components/Video";
import ThreeCards from "../../Components/ThreeCards";
import GRidTwo from "../../Components/GridTwo";
import Rasm1 from "../../Assets/property-01.jpg";
import Rasm2 from "../../Assets/property-02.jpg";
import Rasm3 from "../../Assets/property-03.jpg";
import Rasm4 from "../../Assets/property-04.jpg";
import Rasm5 from "../../Assets/property-05.jpg";
import Rasm6 from "../../Assets/property-06.jpg";
import Cards from "../../Components/Cards";
import Index from "../../Components/Cards";
import Map from "../../Components/Map";
function Home() {
  const data = [
    {
      img: Rasm1,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
    {
      img: Rasm2,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
    {
      img: Rasm3,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
    {
      img: Rasm4,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
    {
      img: Rasm5,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
    {
      img: Rasm6,
      price: "$2.264.000",
      title: "18 New Street Miami, OR 97219",
    },
  ];
  return (
    <div>
      <Carousel />
      <div className="">
        <Grid />
      </div>
      <div className="my-10">
        <Video />
      </div>
      <br />
      <div className="mt-56">
        <ThreeCards />
      </div>
      <GRidTwo />
      <div className="grid  justify-center  w-full ">
        <div className="grid justify-items-center my-28">
          <p className="text-[15px] text-[#EE626b] font-bold">| PROPERTIES</p>
          <br />
          <h1 className="text-center text-[40px] font-extrabold">
            We Provide The Best <br /> Property You Like
          </h1>
        </div>
        <Index />
      </div>

      <div className="mb-[550px] w-full p-0 m-0 mt-36">
        <Map />
      </div>
    </div>
  );
}

export default Home;
