import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
//import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Overview = () => {
  return (
    <div className="Overview">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <ImageGallery />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <ProductDetails />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
