import React from "react";
import ImageListEntry from "./ImageListEntry";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";

const ImageList = ({ productData }) => {
  return (
    <Grid container>
      <Grid item>
        <RadioGroup name="spacing" aria-label="spacing" row>
          {productData.productData.length !== 0
            ? productData.productData[0].photos.map(image => {
                return (
                  <ImageListEntry
                    key={image.style_id}
                    imageThumbnail={image.thumbnail_url}
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
