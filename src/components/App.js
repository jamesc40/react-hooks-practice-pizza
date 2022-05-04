import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

const URL = 'http://localhost:3001/pizzas'

function App() {
  const [pizza, setPizza] = useState([])
  const [activePie, setActive] = useState('')

  useEffect(() => {
    fetch(URL)
    .then(r => r.json())
    .then(data => setPizza(data))
  }, [])

  const handleActive = (id) => setActive(pizza.find(el => el.id === id))
  const handleActiveChange = (name, value) => setActive({ ...activePie, [name]: value })

  const handleFormSubmit = (data) => setPizza(pizza.map(el => el.id === data.id ? data: el))
  console.log(pizza)

  return (
    <>
      <Header />
      <PizzaForm 
        pie={activePie} 
        onActiveChange={handleActiveChange}
        onFormSubmit={handleFormSubmit}
      />
      <PizzaList 
        pizza={pizza}
        handleActive={handleActive}
      />
    </>
  );
}

export { URL };
export default App;
