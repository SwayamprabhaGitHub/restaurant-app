import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemToCartHandler = (item) => {
    const updatingList = [...items, item];
    const mapList = {};
    updatingList.forEach((item) => {
      if (mapList[item.id]) {
        mapList[item.id].quantity =
          Number(mapList[item.id].quantity) + Number(item.quantity);
      } else {
        mapList[item.id] = { ...item };
        mapList[item.id].quantity = Number(item.quantity);
      }
    });
    const mealsList = Object.values(mapList);
    setItems(mealsList);
  };
  const removeItemFromCartHandler = (id) => {
    const updatedList = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedList);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
