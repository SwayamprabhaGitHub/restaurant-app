import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import "./MealsForm.css";

const MealsForm = (props) => {
  const cartCnxt = useContext(CartContext);
  const addMealButtonHandler = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCnxt.addItem({ ...props.mealToAdd, quantity: quantity });
    console.log(cartCnxt.items);
  };
  return (
    <form className="form">
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          id={"amount_" + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        ></input>
      </div>
      <button id={props.id} onClick={addMealButtonHandler}>
        +Add
      </button>
    </form>
  );
};

export default MealsForm;
