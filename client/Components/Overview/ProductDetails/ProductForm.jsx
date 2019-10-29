import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: 200
  }
});

const ProductForm = props => {
  const classes = useStyles();
  return (
    //ternary operator if null disable
    <Container>
      <FormControl variant="outlined" color="inherit">
        {" "}
        Size:
        <Select native autoWidth={true} className={classes.root}>
          {Object.keys(props.productData.skus).map(size => {
            return (
              <option key={size} value={size}>
                {size}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" color="inherit">
        Quantity:
        <Select native autoWidth={true} className={classes.root}>
          {Object.values(props.productData.skus).map(quantity => {
            return (
              <option key={quantity} value={props.id}>
                {quantity}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </Container>
  );
};

export default ProductForm;
