import React from "react";
import "bootstrap/js/src/modal";

export default function Modal(props) {
  const modalId = `modalImage-${props.id}`;

  return (
    <div>
      <img
        src={props.image}
        alt={modalId}
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
        className="thumb"
        title={props.alt}
      />

      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
              <img
                src={props.image}
                className="modal-img d-block w-100"
                alt={modalId}
              />
              <div className="modal-caption">{props.alt}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
