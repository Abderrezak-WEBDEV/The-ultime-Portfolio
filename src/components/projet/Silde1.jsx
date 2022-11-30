import React from "react";
import "../projet/Slide.css";
// import Io from "../../assets/folio3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
const Silde1 = () => {
  return (
    <div>
      <Swiper
        id="contact"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Im} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={Io} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={In} alt="slide1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Silde1;
