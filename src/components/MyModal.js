import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const styles = {
  image: {
    width: "100%",
    height: "auto",
  },

  btn: {
    boxShadow: "5px 5px 5px darkgray",
  },
};

export default function MyModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Button onClick={handleShow} variant="link">
        <img src={props.image} alt={props.alt} style={styles.btn} />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={props.image} alt={props.alt} style={styles.image} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
