import React from "react";
//import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageGalleryContainer from "../../containers/ImageGalleryContainer.jsx";
import ProductDetailsContainer from "../../containers/ProductDetailsContainer.jsx";

const Overview = () => {
  return (
    <div className="Overview">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <ImageGalleryContainer />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <ProductDetailsContainer />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
