import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./CartModal.css";
import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCartClose}></div>;
};
const ModalOverlay = (props) => {
  const cartCnxt = useContext(CartContext);
  const mapList = {};
  cartCnxt.items.forEach((item) => {
    if (mapList[item.id]) {
      mapList[item.id].quantity =
        Number(mapList[item.id].quantity) + Number(item.quantity);
    } else {
      mapList[item.id] = { ...item };
      mapList[item.id].quantity = Number(item.quantity);
    }
  });
  const mealsList = Object.values(mapList);
  console.log(mealsList);
  let totalAmount = 0;
  mealsList.forEach((item) => {
    totalAmount += Number(item.quantity) * Number(item.price.slice(1));
  });
  return (
    <div className="modal">
      <ul>
        {mealsList.map((item) => {
          return (
            <li key={item.id}>
              <p>{`${item.meal} ${item.price} Quantity: ${item.quantity}`}</p>
            </li>
          );
        })}
      </ul>
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
