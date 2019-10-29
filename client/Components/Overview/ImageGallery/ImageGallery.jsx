import React from "react";
import ImageList from "./ImageList";
import Container from "@material-ui/core/Container";
import notFound from "../logos/notFound.svg";

const ImageGallery = ({ productData = [], handleClick, id, styleId }) => {
  // console.log(productData[1], "ProductStyles");
  return (
    <div className="Image">
      <Container maxWidth="sm">
        {productData[0].photos.length === 0 ||
        productData[0].photos[0].thumbnail_url === null ? (
          <div className="imageNotFound">
            IMAGE NOT FOUND
            <img src={notFound} />
          </div>
        ) : (
          <div>
            <img
              className="MainImage"
              src={productData[styleId].photos[id].url}
            />
            <ImageList
              productData={productData[styleId].photos}
              handleClick={handleClick}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ImageGallery;
