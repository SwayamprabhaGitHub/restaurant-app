import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCartClose}></div>;
};

const ModalOverlay = (props) => {
  const cartCnxt = useContext(CartContext);

  let totalAmount = 0;
  cartCnxt.items.forEach((item) => {
    totalAmount += Number(item.quantity) * Number(item.price.slice(1));
  });
  return (
    <div className="modal">
      <CartItems listOfMeals={cartCnxt.items} />
      <div>
        <p id="total">Total Amount</p>
        <p id="dollar">${totalAmount}</p>
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
