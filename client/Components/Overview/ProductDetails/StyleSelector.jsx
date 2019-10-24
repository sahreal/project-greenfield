import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import StyleSelectorItem from "./StyleSelectorItem.jsx";

const StyleSelector = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <StyleSelectorItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default StyleSelector;

// container justify="center" alignItems="center"
