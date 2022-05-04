import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizza, handleActive }) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizza.map(el => {
          return (
            <Pizza 
              key={el.id}
              pie={el}
              handleActive={handleActive}
            />)
        })}
      </tbody>
    </table>
  );
}

export default PizzaList;
