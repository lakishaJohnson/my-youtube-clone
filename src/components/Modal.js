// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

function Modal({ errorStatus, showModal, setShowModal }) {
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(true);
    navigate("/");
  };

  return (
    <>
      {/* {errorStatus === 400 && ( */}
      {!showModal && (
        <div className="modal" tabIndex="-1">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">400 Bad Request</h4>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>
                “Warning: Do Not Attempt to Debug This Error. It’s a Trap!”{" "}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
