import React from "react";
import StyleSelector from "./StyleSelector.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductDetails = productDetails => {
  console.log(productDetails, "ow");
  return (
    <div className="ProductDetails">
      <div>stars: *****</div>
      <h1 className="ProductName">Product Name</h1>
      <div className="Category">Category</div>
      <div className="Category">Price</div>
      <StyleSelector />
      <Container>
        <FormControl variant="outlined">
          <InputLabel>Size</InputLabel>
          <Select native>
            <option value="" />
            <option value={10}>Small</option>
            <option value={20}>Medium</option>
            <option value={30}>Large</option>
          </Select>
          {/* <FormHelperText>Helper text</FormHelperText> */}
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Quantity</InputLabel>
          <Select native>
            <option value="" />
            <option value={10}>Not A lot</option>
            <option value={20}>A Lot</option>
            <option value={30}>WoW so much clothz</option>
          </Select>
        </FormControl>
        {/* <Button variant="outlined" color="inherit">
          Add to Cart +
        </Button> */}
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          // className={classes.button}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        <Button variant="outlined" color="inherit">
          Star
        </Button>
      </Container>
    </div>
  );
};

export default ProductDetails;
