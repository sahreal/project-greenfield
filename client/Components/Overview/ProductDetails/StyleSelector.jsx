import React from "react";
//import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import StyleSelectorItem from "./StyleSelectorItem.jsx";
import "../../../index.css";

const StyleSelector = ({ productData, handleStyleClick }) => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={3}>
          <div className="style-bubbles-container">
            {productData[0].photos.map((image, index) => {
              return (
                <StyleSelectorItem
                  key={index}
                  imageThumbnail={image.thumbnail_url}
                  handleStyleClick={handleStyleClick}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StyleSelector;

// container justify="center" alignItems="center"
