import React from "react";
import ImageList from "./ImageList";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const ImageGallery = props => {
  return (
    <div className="Image">
      <Container maxWidth="sm">
        {props.productData[0].photos.length !== 0 ? (
          <img
            className="MainImage"
            src={props.productData[0].photos[props.id].url}
          />
        ) : null}
      </Container>
      {props.productData[0].photos.length !== 0 ? (
        <ImageList
          productData={props.productData[0].photos}
          handleClick={props.handleClick}
        />
      ) : null}
    </div>
  );
};

export default ImageGallery;
