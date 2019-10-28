import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const marks = [
  {
    value: 0,
    lable: "small"
  },
  {
    value: 1.25
  },
  {
    value: 2.5
  },
  {
    value: 3.75
  },
  {
    value: 5,
    lable: "large"
  }
];
const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const FactorSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 8,
    padding: "15px 0"
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},

  track: {
    height: 8,
    color: "grey"
  },
  rail: {
    height: 8,
    backgroundColor: "grey"
  },
  mark: {
    backgroundColor: "white",
    height: 8,
    width: 5,
    marginleft: 3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

const ReviewFactorEntry = ({ factor }) => {
  return (
    <div>
      {console.log(parseInt(factor.value))}
      <FactorSlider
        defaultValue={3}
        max={5}
        step={0.1}
        marks={marks}
        valueLabelDisplay="off"
        track="false"
      />
    </div>
  );
};

export default ReviewFactorEntry;
