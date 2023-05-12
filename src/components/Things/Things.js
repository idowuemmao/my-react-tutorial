import { useState } from "react";

export default function Things() {
  const [thingsArray, setThingsArray] = useState(["thing1", "thing2"]);
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  function addThings() {
    const newThing = `thing ${thingsArray.length + 1}`;
    //... is the spread operator and the spread operator is used to preserve the previous state. When used with useState, the spread operator can be used to update the state by creating a new object or array that includes the previous state and any new values.
    setThingsArray((prevThings) => [...prevThings, newThing]);
  }

  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  const [state, setState] = useState("Yes");
  function change() {
    setState((prevState) => "No");
  }
  return (
    <div>
      <button onClick={addThings}>Add Item</button>
      {thingsElements}
      <hr />
      <div>
        <button onClick={add}>+</button>
        <h2>{count}</h2>
        <button onClick={minus}>-</button>
      </div>
      <hr />
      <div>
        <h1>Is React Easy to Learn?</h1>
        <button onClick={change}>{state}</button>
      </div>
    </div>
  );
}
