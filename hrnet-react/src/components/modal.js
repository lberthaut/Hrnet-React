import React from "react";
import ReactDOM from "react-dom";


const Modal = ({isShowing, hide}) =>
isShowing
? ReactDOM.createPortal(
    <>
    <div className="overlay" onClick={hide}></div>
      <div className="modal_container">
        <i className="far fa-times-circle close_button" onClick={hide}></i>
        <div className="'content_modal_container">
          <h2 className="modal_title">Modal HRnet</h2>
          <p className="text">
            Employee created !
          </p>
        </div>
    </div>
    </>,document.getElementById('root')
    ):
    null;

    export default Modal;
