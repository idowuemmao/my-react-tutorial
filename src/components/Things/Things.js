export default function Things() {
  const thingsArray = ["thing1", "thing2"];
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);
  //   console.log(thingsArray);
  function add() {
    const newThing = `thing ${thingsArray.length + 1}`;
    thingsArray.push(newThing);
  }
  return (
    <div>
      <button onClick={add}>Add Item</button>
      {thingsElements}
    </div>
  );
}
