import React from "react";
import "./CartItems.css";
import CartItemsButton from "./CartItemsButton";
const CartItems = (props) => {
    
    return <ul>
        {props.listOfMeals.map((meal) => {
            return <div className="cartMeal" key={meal.id}>
                <li>
                    {meal.meal}<br/>
                    {meal.price}<br/>
                </li>
                <CartItemsButton quantity={meal.quantity} />
            </div>
        })}
    </ul>
}

export default CartItems;