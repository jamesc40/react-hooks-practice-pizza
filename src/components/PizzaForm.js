import React from "react";
import { URL } from './App';

function PizzaForm({ pie, onActiveChange, onFormSubmit }) {
  const {id, topping, size, vegetarian} = pie

  const handleInput = (e) => onActiveChange(e.target.name, e.target.value)
  const handleCheckBox = (e) => onActiveChange(e.target.name, e.target.value === 'veg')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pie)
    })
    .then(r => r.json())
    .then(onFormSubmit)
  }

  if(!pie) return null

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleInput}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleInput}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value='veg'
              checked={vegetarian}
              onChange={handleCheckBox}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value='not veg'
              checked={!vegetarian}
              onChange={handleCheckBox}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
