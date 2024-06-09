import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItemsButton = (props) => {
  const cartCnxt = useContext(CartContext);
  const reduceQuantityHandler = (event) => {
    event.preventDefault();
    if (props.mealQuantity.quantity >= 2) {
      cartCnxt.addItem({ ...props.mealQuantity, quantity: -1 });
    } else {
      cartCnxt.removeItem(props.mealQuantity.id);
    }
  };
  const increaseQuantityHandler = (event) => {
    event.preventDefault();
    cartCnxt.addItem({ ...props.mealQuantity, quantity: 1 });
  };

  return (
    <div>
      Quantity: {props.mealQuantity.quantity}
      <br />
      <button onClick={reduceQuantityHandler}>-</button>
      <button onClick={increaseQuantityHandler}>+</button>
    </div>
  );
};

export default CartItemsButton;
