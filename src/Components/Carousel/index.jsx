import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Rasm1 from "../../Assets/banner-01.jpg";
import Rasm2 from "../../Assets/banner-02.jpg";
import Rasm3 from "../../Assets/banner-03.jpg";
import { Pagination, Navigation } from "swiper/modules";

function Carousel() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper text-transparent"
      >
        <SwiperSlide>
          <img src={Rasm1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rasm2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rasm3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
