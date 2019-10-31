import React from "react";
import ImageListEntry from "./ImageListEntry";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import "./ImageGallery.css";

const ImageList = ({ productData, handleClick }) => {
  return (
    <Grid container>
      <Grid item>
        <RadioGroup
          name="spacing"
          aria-label="spacing"
          row={false}
          style={{ zIndex: "2", position: "absolute" }}
        >
          {productData.length !== 0
            ? productData.map((item, index) => {
                return (
                  <ImageListEntry
                    key={`a${index}`}
                    index={index}
                    imageThumbnail={item.thumbnail_url}
                    handleClick={handleClick}
                  />
                );
              })
            : null}
        </RadioGroup>
      </Grid>
    </Grid>
  );
};

export default ImageList;
