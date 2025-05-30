import React, { useState } from "react";
import ServiceComponent from "../components/ServiceComponent";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "service-1.jpg",
      title: "Air Freight Services",
      text: "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    },
    {
      id: 2,
      image: "service-2.jpg",
      title: "Drone Services",
      text: "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    },
    {
      id: 1,
      image: "service-1.jpg",
      title: "Air Freight Services",
      text: "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    },
    {
      id: 2,
      image: "service-2.jpg",
      title: "Drone Services",
      text: "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    },
    {
      id: 1,
      image: "service-1.jpg",
      title: "Air Freight Services",
      text: "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    },
    {
      id: 2,
      image: "service-2.jpg",
      title: "Drone Services",
      text: "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    },
    {
      id: 1,
      image: "service-1.jpg",
      title: "Air Freight Services",
      text: "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    },
    {
      id: 2,
      image: "service-2.jpg",
      title: "Drone Services",
      text: "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 2;

  const totalSlides = Math.ceil(services.length / slidesToShow);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="service-section">
      <p className="service-title">Real Solution, Real Fast !</p>
      <h1>Best Global Logistic Solution.</h1>

      <div className="service-cards-container">
        <div
          className="service-cards-slider"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="service-cards-group">
              {services
                .slice(
                  slideIndex * slidesToShow,
                  slideIndex * slidesToShow + slidesToShow
                )
                .map((service) => (
                  <ServiceComponent
                    key={service.id}
                    image={service.image}
                    title={service.title}
                    text={service.text}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="service-bottom">
        <div className="solution-bottom">
          <p className="solution-bottom-text1">
            Logistic & Transport Solution Saves Your Time
          </p>
          <p className="solution-bottom-text2">Find Your Solutions </p>
          <FaArrowAltCircleRight />
        </div>

        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
