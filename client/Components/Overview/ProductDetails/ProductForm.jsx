import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "./Modal.jsx";
import "./productDetails.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: 200
  }
});

{
  /* <Select
value={values.age}
onChange={handleChange}
name="age"
displayEmpty
className={classes.selectEmpty}
>
<MenuItem value="" disabled>
  Placeholder
</MenuItem>
<MenuItem value={10}>Ten</MenuItem>
<MenuItem value={20}>Twenty</MenuItem>
<MenuItem value={30}>Thirty</MenuItem> */
}

const ProductForm = ({ productData, size, amount, collectInput }) => {
  const counter = x => {
    let result = [];
    for (let i = 1; i <= x; i++) {
      result.push(i);
    }
    return result;
  };
  const classes = useStyles();
  let i = 0;
  return (
    //ternary operator if null disable
    <Container>
      <FormControl variant="outlined" color="inherit">
        {" "}
        <Select
          native
          autoWidth={true}
          className={classes.root}
          displayEmpty
          onChange={collectInput}
        >
          <option>Select Size</option>
          {Object.keys(productData.skus).map(size => {
            return (
              <option key={size} value={size} onChange={collectInput}>
                {size}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" color="inherit">
        <Select native autoWidth={true} className={classes.root} name="Amount">
          {size === "" ? (
            <option>-</option>
          ) : (
            counter(productData.skus[size]).map(num => (
              <option key={num} value={num} onChange={collectInput}>
                {num}
              </option>
            ))
          )}
        </Select>
      </FormControl>
      {size !== "" ? <Modal size={size} amount={amount} /> : null}
    </Container>
  );
};

export default ProductForm;

// Object.values(props.productData.skus[props.size]).map(quantity => {
//   return (
//     <option key={quantity} value={quantity}>
//       {quantity}
//     </option>
//   );
// })

// [...productData.skus.size].map
// counter(productData.skus[size]).map( quantity => {
//   return(
//  <option key={quantity} value={quantity}>
//      {quantity}
//      </option>
//   )

// )}
