import React from "react";
import "bootstrap/js/src/modal";

export default function ImagePopup(props) {
  return (
    <div>
      <img
        src={props.image}
        alt={props.alt}
        className="thumb"
        data-bs-toggle="modal"
        data-bs-target="#image"
      />

      <div className="modal fade" id="image" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img
                src={props.image}
                className="modal-img d-block w-100"
                alt={props.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
