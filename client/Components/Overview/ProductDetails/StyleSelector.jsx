import React from "react";
//import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import StyleSelectorItem from "./StyleSelectorItem.jsx";
import "../../../index.css";

const StyleSelector = props => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={3}>
          <div className="style-bubbles-container">
            {props.productData.photos.map((image, index) => {
              return (
                <StyleSelectorItem
                  key={`a${index}`}
                  index={index}
                  imageThumbnail={image.thumbnail_url}
                  handleClick={props.handleClick}
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
