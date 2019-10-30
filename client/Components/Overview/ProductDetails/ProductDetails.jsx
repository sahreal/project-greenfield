import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StyleSelectorContainer from "../../../containers/StyleSelectorContainer.jsx";
//import StyleSelector from "./StyleSelector";
import StarReviewsContainer from "../../../containers/StarReviewsContainer";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import ProductInfo from "./ProductInfo.jsx";
import ProductForm from "./ProductForm.jsx";
import ProductSlogan from "./ProductSlogan.jsx";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import facebook from "../logos/facebook.svg";
import pinterest from "../logos/pinterest.svg";
import twitter from "../logos/twitter.svg";
import Container from "@material-ui/core/Container";
import "./productDetails.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: 200
  },
  button: {
    display: "flex",
    flexWrap: "wrap",
    width: 200,
    margin_right: 100
  }
});

const ProductDetails = ({
  productDetails,
  productData = [],
  reviewList,
  id,
  styleId,
  handleStyleChange,
  checkMarker
}) => {
  const classes = useStyles();

  return Object.keys(productDetails).length !== 0 ? (
    <div className="ProductDetails">
      <div className="stars">
        <StarReviewsContainer />
        <div className="readReviews">Read {reviewList.length} Reviews</div>
        <ProductInfo
          productDetails={productDetails}
          productData={productData[styleId]}
        />
      </div>
      {productData.length !== 0 ? (
        <StyleSelectorContainer
          styleId={styleId}
          handleStyleChange={handleStyleChange}
          checkMarker={checkMarker}
        />
      ) : null}
      {productData[styleId].skus.null === null ? (
        <Container>
          <FormControl variant="outlined" color="inherit" disabled>
            Size:
            <Select native value="size" className={classes.root}>
              <option>Out of Stock</option>
            </Select>
          </FormControl>
          <FormControl variant="outlined" color="inherit" disabled>
            Quantity:
            <Select native className={classes.root}>
              <option>Out of Stock</option>
            </Select>
          </FormControl>
        </Container>
      ) : (
        <ProductForm productData={productData[id]} />
      )}
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to Cart
      </Button>
      <div className="socialMedia">
        <a href="https://www.facebook.com">
          <img src={facebook} alt="FBLogo" className="fb sharebutton" />
        </a>
        <a href="https://www.twitter.com">
          <img
            src={twitter}
            alt="TwitterLogo"
            className="twitter sharebutton"
          />
        </a>
        <a href="https://www.pinterest.com">
          <img
            src={pinterest}
            alt="pinterestLogo"
            className="pinterest sharebutton"
          />
        </a>
      </div>
      <ProductSlogan
        slogan={productDetails[2]}
        description={productDetails[3]}
      />
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default ProductDetails;
