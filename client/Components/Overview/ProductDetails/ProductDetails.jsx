import React from "react";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//import StyleSelectorContainer from "../../../containers/StyleSelectorContainer.jsx";
import StyleSelector from "./StyleSelector";
import StarReviews from "../../Reviews/StarReviews";
import { makeStyles } from "@material-ui/core/styles";
import ProductInfo from "./ProductInfo.jsx";
import ProductForm from "./ProductForm.jsx";

const useStyles = makeStyles({
  button: {
    display: "flex",
    flexWrap: "wrap",
    width: 200,
    margin_right: 100
  }
});

const ProductDetails = props => {
  const classes = useStyles();
  return Object.keys(props.productDetails).length !== 0 ? (
    <div className="ProductDetails">
      <StarReviews />
      <ProductInfo productDetails={props.productDetails} />
      <StyleSelector
        productData={props.productData[0]}
        handleClick={props.handleClick}
      />
      <ProductForm productData={props.productData[0]} />
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        className={classes.button}
        startIcon={<AddShoppingCartIcon />}
      >
        Add to Cart
      </Button>
    </div>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default ProductDetails;
