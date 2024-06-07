import React, { useState } from "react";
import Header from "./components/Layout/Header";
import RestaurantSummary from "./components/Layout/RestaurantSummary";
import MealsAvailable from "./components/Meals/MealsAvailable";
import CartModal from "./components/Cart/CartModal";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartVisiblity, setCartVisibilty] = useState(false);

  const cartStateVisible = () => {
    setCartVisibilty(true);
  };
  const cartStateNotVisible = () => {
    setCartVisibilty(false);
  };
  return (
    <CartProvider>
      {cartVisiblity && <CartModal onCartClose={cartStateNotVisible} />}
      <Header onCartState={cartStateVisible} />
      <RestaurantSummary />
      <MealsAvailable />
    </CartProvider>
  );
}

export default App;
