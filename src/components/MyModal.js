import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const styles = {
  imageModal: {
    width: "100%",
    height: "auto",
  },

  btn: {
    display: "block",
    height: "100%",
    width: "100%",
    overflow: "visible",
  },
  imageBtn: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
    filter:
      "drop-shadow(0 20px 13px rgb(0 0 0 / 0.2)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
  },
};

export default function MyModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial", overflow: "visible" }}
    >
      <Button onClick={handleShow} variant="link" style={styles.btn}>
        <img src={props.image} alt={props.alt} style={styles.imageBtn} />
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
          <img src={props.image} alt={props.alt} style={styles.imageModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
}
