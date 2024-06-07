import React from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCartClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header>sushi</header>
      <div>
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
      <footer>
        <button onClick={props.onCartClose}>Close</button>
        <button>Order</button>
      </footer>
    </div>
  );
};

const CartModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCartClose={props.onCartClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCartClose={props.onCartClose} />,
        document.getElementById("modal-root")
      )}
      ;
    </React.Fragment>
  );
};

export default CartModal;
