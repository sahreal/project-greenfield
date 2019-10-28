import React, { PureComponent } from "react";
//import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageGalleryContainer from "../../containers/ImageGalleryContainer.jsx";
import ProductDetailsContainer from "../../containers/ProductDetailsContainer.jsx";

class Overview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target.alt, "alt test");
    this.setState({
      id: e.target.alt
    });
  }

  render() {
    return (
      <div className="Overview">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <ImageGalleryContainer
                id={this.state.id}
                handleClick={this.handleClick}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <ProductDetailsContainer
                id={this.state.id}
                handleClick={this.handleClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Overview;
