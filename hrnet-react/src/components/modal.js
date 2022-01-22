import React from "react";
import ReactDOM from "react-dom";

/*Modal react component that appear when new employee form is submitted*/
const Modal = ({ isShowing, hide, firstname, lastname }) =>
  isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="overlay" onClick={hide}></div>
        <div className="modal_container">
          <i className="far fa-times-circle close_button" onClick={hide}></i>
          <div className="'content_modal_container">
            <h2 className="modal_title">Modal HRnet</h2>
            <p className="text">
              Employee {firstname}&nbsp;{lastname} created !
            </p>
          </div>
        </div>
      </>, document.getElementById('root')
    ) :
    null;

export default Modal;
