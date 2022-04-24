import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slideshow() {
  const images = [
    {
      image:
        "https://frontstudent.com/exam2022/location-oleana-hotel-bergen.jpg",
    },
    {
      image:
        "https://frontstudent.com/exam2022/facade-admiral-hotel-bergen.jpg",
    },
    {
      image:
        "https://frontstudent.com/exam2022/facade-entrance-comfort-hotel-bergen-airport.jpg",
    },
    {
      image: "https://frontstudent.com/exam2022/hotelbergen.jpg",
    },
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.1,
    duration: 6000,
    infinite: false,

    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="https://git.blivesta.com/flexicon/#"
          viewBox="0 0 32 32"
          className="icon icon-chevron-left"
          aria-hidden="true"
          fill="#A9A9A9"
        >
          {/* this is a simple location path*/}
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
      </div>
    ),

    //next arrow button
    nextArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="https://git.blivesta.com/flexicon/#"
          viewBox="0 0 32 32"
          className="icon icon-chevron-right"
          aria-hidden="true"
          fill="#A9A9A9"
        >
          {/* this is a simple location path*/}
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </div>
    ),
  };

  return (
    <div className="m-10">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <img
              src={each.image}
              className="w-3/4 object-cover rounded 1g shadow-x1"
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
}
