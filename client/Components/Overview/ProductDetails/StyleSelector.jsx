import React from "react";
//import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import StyleSelectorItem from "./StyleSelectorItem.jsx";
import "../../../index.css";

const StyleSelector = ({ productData, handleStyleChange, styleId }) => {
  return (
    <div>
      <div className="StyleSelector"> STYLE > {productData[styleId].name}</div>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={3}>
          <div className="style-bubbles-container">
            {productData.map((image, index) => {
              return (
                <StyleSelectorItem
                  key={`a${index}`}
                  index={index}
                  imageThumbnail={image.photos[0].thumbnail_url}
                  handleStyleChange={handleStyleChange}
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
