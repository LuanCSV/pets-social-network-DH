import React from 'react';

import Slider from 'react-slick';
import slides from './CarouselImages.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CarouselLogin.css";

const CarouselLogin = () => {
  const settings = {
    accessibility: true,
    adaptativeHeight: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carouselLogin"
  }

  return (
    <Slider {...settings}>
      { slides.map((item, index) => {
        return (
          <div key={index} class="carousel-item">
            <img class="img-carousel card"
              src={item.imgSrc}
              alt={item.alt} />
          </div>
        )
      })
      }
    </Slider>
  )
}

export default CarouselLogin;