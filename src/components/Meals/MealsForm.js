import React from "react";
import "./MealsForm.css";


const MealsForm = () => {
  return (
    <form className="form">
      <div>
        <label htmlFor="amount">Amount:</label>
        <input id="amount" type="number"></input>
      </div>
      <button>+Add</button>
    </form>
  );
};

export default MealsForm;
