import React from "react";
import ImageGallery from "./ImageGallery.jsx";
import ProductDetails from "./ProductDetails.jsx";

const Overview = () => {
  return (
    <div>
      <Container>
        <ImageGallery />
      </Container>
      <Container>
        <ProductDetails />
      </Container>
    </div>
  );
};

export default Overview;
