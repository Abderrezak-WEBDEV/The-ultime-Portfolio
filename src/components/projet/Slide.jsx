import React from "react";
import Im from "../../assets/folio1.png";
import In from "../../assets/folio2.png";
import Io from "../../assets/folio3.png";
import "../contact/Contact.css";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

// import required modules
import { Autoplay } from "swiper";

const Contact = () => {
  return (
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
  );
};

export default Contact;
