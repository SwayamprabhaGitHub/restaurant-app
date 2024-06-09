import React, { useState } from "react";

const CartItemsButton = (props) => {
    const [qnty, setQnty] = useState(props.quantity);
    const reduceQuantityHandler = (event) => {
        event.preventDefault();
        setQnty(qnty - 1);
    }
    
    return <div>
        Quantity: {qnty}
        <br/>
        <button onClick={reduceQuantityHandler}>-</button>
        <button>+</button>
    </div>
}

export default CartItemsButton;