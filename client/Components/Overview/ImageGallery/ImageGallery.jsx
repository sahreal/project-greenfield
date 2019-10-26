import React, { PureComponent } from "react";
import ImageList from "./ImageList";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class ImageGallery extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //e.target finds the url , need to update the main image in the component
    console.log(e.target, "EHHEEHHEEHE");
  }

  render() {
    //console.log(this.props, "PROPS");
    return (
      <div className="Image">
        <Container maxWidth="sm">
          {this.props.productData[0].photos.length !== 0 ? (
            <img
              className="MainImage"
              src={this.props.productData[0].photos[this.state.id].url}
            />
          ) : null}
        </Container>
        {this.props.productData[0].photos.length !== 0 ? (
          <ImageList
            productData={this.props.productData[0].photos}
            id={this.state.id}
            handleClick={this.handleClick}
            // handleStyleClick={handleStyleClick}
          />
        ) : null}
      </div>
    );
  }
}

export default ImageGallery;

// const useStyles = makeStyles({
//   bigImage: {
//     margin: 10,
//     width: 60,
//     height: 60
//   }
// });

// const ImageGallery = (productData, handleStyleClick) => {
//   const classes = useStyles();
//   return (
//     <div className="Image">
//       <Container maxWidth="sm">
//         {productData.productData[0].photos.length !== 0 ? (
//           <img
//             className="MainImage"
//             src={productData.productData[0].photos[0].url}
//           />
//         ) : null}
//       </Container>
//       <ImageList
//         productData={productData}
//         handleStyleClick={handleStyleClick}
//       />
//     </div>
//   );
// };

// export default ImageGallery;
