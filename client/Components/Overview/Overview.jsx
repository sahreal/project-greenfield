import React, { PureComponent } from "react";
//import ImageGallery from "./ImageGallery/ImageGallery.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageGalleryContainer from "../../containers/ImageGalleryContainer.jsx";
import ProductDetailsContainer from "../../containers/ProductDetailsContainer.jsx";
import "./Overview.css";
class Overview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      styleId: 0,
      checkMarker: false,
      ImageMarker: false,
      showModal: false,
      size: "",
      amount: 0
      //   noImage: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.leaveExpand = this.leaveExpand.bind(this);
    this.collectInput = this.collectInput.bind(this);
    // this.handleImageChange = this.handleImageChange.bind(this);
  }

  collectInput(e) {
    console.log(e.target.value, "TARGET");
    if (typeof e.target.value === "number") {
      this.setState({ amount: e.target.value });
    }
    if (typeof e.target.value === "string") {
      this.setState({ size: e.target.value });
    }
  }

  handleClick(e) {
    this.setState({
      id: Number(e.target.alt),
      showModal: true,
      ImageMarker: true
    });
  }

  handleStyleChange(e) {
    this.setState({
      styleId: Number(e.target.alt),
      checkMarker: true
    });
  }

  // handleImageChange(e) {
  //   this.setState({
  //     styleId: Number(e.target.alt),
  //     ImageMarker: true
  //   });
  // }

  leaveExpand() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className="Overview">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper style={{ background: "black" }}>
              <ImageGalleryContainer
                id={this.state.id}
                handleClick={this.handleClick}
                // handleImageChange={this.handleImageChange}
                styleId={this.state.styleId}
                showModal={this.state.showModal}
                leaveExpand={this.leaveExpand}
                ImageMarker={this.state.ImageMarker}
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
                showModal={this.state.showModal}
                collectInput={this.collectInput}
                size={this.state.size}
                amount={this.state.amount}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Overview;

{
  /* <a class="lightbox" href="#dog">
   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
</a> 
<div class="lightbox-target" id="dog">
   <img src="http://i.huffpost.com/gen/749263/original.jpg"/>
   <a class="lightbox-close" href="#"></a>
</div> */
}
