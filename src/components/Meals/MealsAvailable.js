import React from "react";
import "./MealsAvailable.css";
import MealsForm from "./MealsForm";

const DummyMeals = [
  {
    id: 1,
    meal: "Veg thali",
    description: "rice and roti with dal and veggies",
    price: "$50",
  },
  {
    id: 2,
    meal: "Non-Veg thali",
    description: "rice and roti with chicken and fish",
    price: "$80",
  },
  {
    id: 3,
    meal: "Chinese platter",
    description: "fried rice, noodles and manchurian",
    price: "$40",
  },
  {
    id: 4,
    meal: "Pizza",
    description: "thin crust cheese loaded with mushroom toppings",
    price: "$90",
  },
];

const MealsAvailable = () => {
  return (
    <ul className="meals">
      {DummyMeals.map((Meal) => {
        return (
          <li className="meal" key={Meal.id}>
            <div>
              <h3>{Meal.meal}</h3>
              <p id="description">{Meal.description}</p>
              <p id="price">{Meal.price}</p>
            </div>
            <div>
              <MealsForm />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MealsAvailable;
