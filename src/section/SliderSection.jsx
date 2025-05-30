import React, { useState } from "react";
import SliderComponent from "../components/SliderComponent";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    text: "LOGISTIC",
    heading1: "Best Shipping",
    heading2: "Partner",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa ipsa excepturi consequuntur corrupti odio aspernatur fugit, neque ipsa dolor consjutr",
    image: "slider-1.jpg",
  },
  {
    text: "DELIVERY",
    heading1: "Fast Delivery",
    heading2: "World Wide",
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa ipsa excepturi consequuntur corrupti odio aspernatur fugit, neque ipsa dolor consjutr",
    image: "slider-2.jpg",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slider-slide" key={index}>
            <SliderComponent {...slide} />
          </div>
        ))}
      </div>

      <div className="slider-btn">
        <p>
          {currentSlide + 1}/{slides.length}
        </p>
        <FaArrowLeft onClick={prevSlide} />
        <FaArrowRight onClick={nextSlide} />
      </div>
    </div>
  );
};

export default SliderSection;
