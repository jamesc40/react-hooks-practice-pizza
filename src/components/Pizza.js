import React from "react";

function Pizza({ pie, handleActive }) {
  const {id, topping, size, vegetarian} = pie

  const handleClick = () => handleActive(id)

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian.toString()}</td>
      <td>
        <button id={id} type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
