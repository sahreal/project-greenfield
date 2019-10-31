import React from "react";
import Slider from "react-slick";

import "./ImageGallery.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import Carousel from "react-image-gallery";
//import Container from "@material-ui/core/Container";

//import Slider

const ImageCarousel = ({ productData, handleClick, id, showModal }) => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black"
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    arrows: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px"
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {productData.map((img, index) => (
          <div
            className="slider-img"
            key={`a${index}`}
            // style={{ padding: "5px", width: "600px", height: "600px" }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={img.url}
              onClick={handleClick}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
