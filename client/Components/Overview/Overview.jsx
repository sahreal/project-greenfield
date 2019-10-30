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
      id: 0,
      styleId: 0,
      checkMarker: false
      //   noImage: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
  }

  handleClick(e) {
    this.setState({
      id: Number(e.target.alt)
    });
  }

  handleStyleChange(e) {
    this.setState({
      styleId: Number(e.target.alt),
      checkMarker: true
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
                styleId={this.state.styleId}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <ProductDetailsContainer
                id={this.state.id}
                handleClick={this.handleClick}
                styleId={this.state.styleId}
                checkMarker={this.state.checkMarker}
                handleStyleChange={this.handleStyleChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Overview;
