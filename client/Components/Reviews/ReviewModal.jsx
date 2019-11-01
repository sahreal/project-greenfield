import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import "./reviews.css";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      hover: 0,
      recommended: 1,
      characteristics: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStarHoverChange = this.handleStarHoverChange.bind(this);
    this.handleRecommend = this.handleRecommend.bind(this);
  }
  handleInputChange(e) {
    this.setState({ email: e.target.value });
  }
  handleStarHoverChange(newHover) {
    this.setState({ hover: newHover });
  }
  handleRecommend(e) {
    this.setState({ recommended: e.target.value });
  }
  render() {
    const labels = {
      1: "Poor",
      2: "Fair",
      3: "Average",
      4: "Good",
      5: "Great"
    };
    return (
      <Modal {...this.props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Write your Review
            <Modal.Body>
              <Form>
                <Form.Group className="review-choose-rating">
                  <Rating
                    name="hover-side"
                    value={this.state.hover}
                    precision={1}
                    onChange={(event, newHover) => {
                      this.handleStarHoverChange(newHover);
                    }}
                  />
                  <p className="review-star-meaning">
                    {this.state.hover !== 0 ? labels[this.state.hover] : null}
                  </p>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Do you recommend this product?</Form.Label>
                  <Form.Check
                    inline
                    label="Yes"
                    value={1}
                    type="radio"
                    name="recommend"
                    onChange={this.handleRecommend}
                  />
                  <Form.Check
                    inline
                    label="No"
                    value={0}
                    type="radio"
                    name="recommend"
                    onChange={this.handleRecommend}
                  />
                </Form.Group>
                <Form.Group>Characterastics chart</Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    size="sm"
                    onChange={e => {
                      this.handleInputChange(e);
                    }}
                    value={this.state.email}
                    type="email"
                    placeholder="Example: jackson11@gmail.com"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => {
              this.props.onHide();
            }}
            size="sm"
            variant="outline-dark"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewModal;
