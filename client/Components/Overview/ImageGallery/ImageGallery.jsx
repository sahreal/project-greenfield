import React from "react";
import ImageList from "./ImageList";
import Container from "@material-ui/core/Container";
import notFound from "../logos/notFound.svg";
import ImageGalleryCarousel from "./ImageGalleryCarousel";
import "./ImageGallery.css";

const ImageGallery = ({
  productData,
  handleClick,
  id,
  styleId,
  showModal,
  leaveExpand,
  carouselArrows,
  ImageMarker
}) => {
  // console.log(productData[styleId], "LOOOK AT ME GO");
  const modalExpand = showModal ? "shrink" : "HEY";
  const disappear = showModal ? "NO" : "shrink";

  return (
    <div className="Image">
      <Container maxWidth="sm">
        {productData[styleId].photos.length === 0 ||
        productData[styleId].photos[id].thumbnail_url === null ? (
          <img src={notFound} />
        ) : (
          <div className={modalExpand}>
            {showModal ? (
              <img
                src={productData[styleId].photos[id].url}
                onClick={leaveExpand}
              />
            ) : null}
            <div classname={disappear}>
              <ImageList
                productData={productData[styleId].photos}
                handleClick={handleClick}
                ImageMarker={ImageMarker}
                styleId={styleId}
                className="ImageList"
              />

              {productData[styleId].photos[id].url === null ? null : (
                <ImageGalleryCarousel
                  productData={productData[styleId].photos}
                  id={id}
                  handleClick={handleClick}
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ImageGallery;
