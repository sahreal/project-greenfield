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
  ImageMarker
}) => {
  // console.log(productData[styleId], "LOOOK AT ME GO");
  //                               //true   //false
  // const modalExpand = showModal ? "shrink" : "expand";
  // const disappear = showModal ? "expand" : "shrink";

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className="Image">
      <Container maxWidth="sm">
        {productData[styleId].photos.length === 0 ||
        productData[styleId].photos[id].thumbnail_url === null ? (
          <img src={notFound} />
        ) : (
          <div className="shrink">
            {showModal ? (
              <div className={showHideClassName}>
                <img
                  className="modal-main2"
                  src={productData[styleId].photos[id].url}
                  onClick={leaveExpand}
                />
              </div>
            ) : null}
            <div>
              <ImageList
                productData={productData[styleId].photos}
                handleClick={handleClick}
                ImageMarker={ImageMarker}
                styleId={styleId}
              />

              {productData[styleId].photos[id].url === null ? null : (
                <ImageGalleryCarousel
                  productData={productData[styleId].photos}
                  id={id}
                  // handleClick={handleClick}
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
