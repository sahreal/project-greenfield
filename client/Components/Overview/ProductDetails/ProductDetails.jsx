import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import StyleSelectorContainer from "../../../containers/StyleSelectorContainer.jsx";
import StarReviews from "../../Reviews/StarReviews";
import { makeStyles } from "@material-ui/core/styles";

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

const ProductDetails = productDetails => {
  const classes = useStyles();
  return Object.keys(productDetails).length !== 0 ? (
    <div className="ProductDetails">
      <StarReviews />
      <h1 className="ProductName">{productDetails.productDetails[1]}</h1>
      <div className="Category">{productDetails.productDetails[4]}</div>
      <div className="Price">{productDetails.productDetails[5]}</div>
      <StyleSelectorContainer />
      <Container>
        <FormControl variant="outlined" color="inherit">
          {" "}
          Size:
          <Select native value="size" className={classes.root}>
            {Object.keys(productDetails.productData[0].skus).map(size => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </Select>
          {/* <FormHelperText>Helper text</FormHelperText> */}
        </FormControl>
        <FormControl variant="outlined" color="inherit">
          Quantity:
          <Select native autoWidth={true} className={classes.root}>
            {Object.values(productDetails.productData[0].skus).map(quantity => {
              return (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Container>
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
