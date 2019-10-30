import React from "react";
import ImageList from "./ImageList";
import Container from "@material-ui/core/Container";
import notFound from "../logos/notFound.svg";
import ImageGalleryCarousel from "./ImageGalleryCarousel";

const ImageGallery = ({ productData, handleClick, id, styleId }) => {
  // console.log(productData[styleId], "LOOOK AT ME GO");
  return (
    <div className="Image">
      <Container maxWidth="sm">
        {productData[styleId].photos.length === 0 ||
        productData[styleId].photos[id].thumbnail_url === null ? (
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
            {/* {productData[styleId].photos[id].url === null ? null : (
              <ImageGalleryCarousel
                productData={productData[styleId].photos}
                id={id}
                handleClick={handleClick}
              />
            )} */}
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
