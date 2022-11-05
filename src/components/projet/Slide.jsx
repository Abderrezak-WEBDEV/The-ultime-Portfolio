import React from "react";

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
        <img
          src="https://cdn.pixabay.com/photo/2014/12/29/15/36/business-582912__340.jpg"
          alt="slide1"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521__340.jpg"
          alt="slide1"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src="https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_960_720.jpg"
          alt="slide1"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Contact;
