import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import cartImage from "./shopping-cart.png";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  })
  return (
    <button className={classes.button} onClick={props.onCartButton}>
      <img src={cartImage} alt="logo" className={classes.icon}></img>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
