import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./reviews.css";

const characLabels = {
  Size: {
    1: "A size too small",
    2: "1/2 a size too small",
    3: "perfect",
    4: "1/2 a size too big",
    5: "a size too wide"
  },
  Width: {
    1: "Too narrow",
    2: "Slightly narrow",
    3: "Perfect",
    4: "Slightly wide",
    5: "Too wide"
  },
  Comfort: {
    1: "Uncomfortable",
    2: "Slightly uncomfortable",
    3: "OK",
    4: "Comfortable",
    5: "Perfect"
  },
  Quality: {
    1: "Poor",
    2: "Below average",
    3: "What I expected",
    4: "Pretty great",
    5: "Perfect"
  },
  Length: {
    1: "Run Short",
    2: "Runs slightly short",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Run Long"
  },
  Fit: {
    1: "Run tight",
    2: "Run slightly tight",
    3: "Perfect",
    4: "Runs slightly long",
    5: "Runslong"
  }
};

const ReviewCharacForm = () => {
  return (
    <Form.Group>
      {Object.keys(characLabels).map(charac => {
        return [1, 2, 3, 4, 5].map(value => {
          return (
            <Form.Check
              inline
              value={value}
              label={charac.value}
              type="radio"
              name={charac}
            ></Form.Check>
          );
        });
      })}
    </Form.Group>
  );
};
export default ReviewCharacForm;
