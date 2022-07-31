import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  // const thingsArray = ["Thing 1", "Thing 2"]
  // const thingsElements=
  // thingsArray.map((thing)=><p key={thing}>{thing}</p>);

  function addItem() {
    setThings((prev) => [...prev, `Thing ${prev.length + 1}`]);
    // thingsArray.push(thingsItem);
    // console.log(thingsItem);
  }
  // const thingsElements=
  // things.map((thing)=><p key={thing}>{thing}</p>);

  // function toggleFavorite() {
  //   setContact(prevContact => ({
  //       ...prevContact,
  //       isFavorite: !prevContact.isFavorite
  //   }))
  // } //obj state

  return (
    <div className="App">
      <input type="text" placeholder="Enter your item" className="form-input" />
      <button onClick={addItem}>ADD ITEM</button>
      <ul>
        {things.map((thing) => {
          return <li key={thing}>{thing}</li>;
        })}
      </ul>
    </div>
  );
}
