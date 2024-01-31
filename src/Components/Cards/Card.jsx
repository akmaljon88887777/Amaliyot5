import React from "react";

function Cards({ price, btntext, img }) {
  return (
    <div className="w-[415.99px]  grid justify-items-center py-8 rounded-lg bg-[#F9F9F9]">
      <div>
        <img className="rounded-lg" src={img} alt="" />
      </div>
      <div>
        <div className="gap-44 mt-4 flex">
          <div className="w-[102.84px] flex justify-center items-center font-medium h-[31px] rounded bg-[#FBD9CF] text-[14px]">
            {btntext}
          </div>
          <div className="text-[20px] text-[#f35525] font-bold">{price}</div>
        </div>
        <br />
        <div className="text-[19px] font-bold">
          18 Old Street Miami, OR 97219
        </div>
        <br />
        <div className="border-b pb-4">
          <div className="flex gap-8">
            <div>Bedrooms: 8</div>
            <div>Bathrooms: 8</div>
          </div>
          <div className="flex gap-8 mt-2">
            <div>Area: 545m2</div>
            <div> Floor: 3</div>
            <div> Parking: 6 spots</div>
          </div>
        </div>
        <br />
      </div>
      <div>
        <button className="w-[170.41px] h-[40px] rounded-full bg-[#1e1e1e] text-white text-[14px] font-medium">
          Schedule a visit
        </button>
      </div>
    </div>
  );
}

export default Cards;
