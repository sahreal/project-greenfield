import React from "react";
import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const Overview = () => {
  axios
    .get("http://18.223.1.30/products/1/styles")
    .then(axiosResult => console.log(axiosResult.data))
    .catch(err => console.log(err, "error"));

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
