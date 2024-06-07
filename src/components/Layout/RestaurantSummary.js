import React from "react";
import classes from "./RestaurantSummary.module.css";

const RestaurantSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        ofcourse by experienced chefs
      </p>
    </section>
  );
};

export default RestaurantSummary;
