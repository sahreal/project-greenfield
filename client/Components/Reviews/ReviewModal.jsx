import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {
      console.log(this.props);
    }
    return (
      <Modal {...this.props} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <p>hello world</p>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ReviewModal;
