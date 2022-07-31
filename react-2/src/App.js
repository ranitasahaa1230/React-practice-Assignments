import "./styles.css";
import React, { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [box, setbox] = useState(boxes);
  const [messages, setMessages] = useState(["a", "b"]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  // const [online,setOn]=useState(true);
  function toggleHandler(id) {
    // console.log(id)
    setbox((prev) => {
      return prev.map((boxes) => {
        return boxes.id === id ? { ...boxes, on: !boxes.on } : boxes;
      });
    });
  }

  const boxElements = box.map((item) => (
    <Box key={item.id} id={item.id} on={item.on} toggle={toggleHandler} />
  ));

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        // [event.target.name]: event.target.value
        //in sq. brackets bcoz
        //surrond key as dynamic properties called computed properties
        [name]: type === "checkbox" ? checked : value
      };
    });
  }
  // console.log(formData.favColor);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <h2>
        {/* {messages.length===0 ? <h1>You're caught up</h1>
       : <h1>
        You have {messages.length} unread { messages.length > 1 ? "messages" : " message"}
        </h1>} */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName" //from state keep same name
            value={formData.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange} ////from state keep same name lastname
            name="lastName"
            value={formData.lastName}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange} ////from state keep same name lastname
            name="email"
            value={formData.email}
          />
          <textarea
            placeholder="Comments"
            onChange={handleChange} ////from state keep same name lastname
            name="comments"
            value={formData.comments}
          />
          <br />
          <input
            type="checkbox"
            onChange={handleChange} ////from state keep same name lastname
            name="isFriendly"
            id="isFriendly"
            checked={formData.isFriendly}
          />
          <label htmlFor="isFriendly">Friendly or not ? </label>
          <br />
          <br />

          <fieldset>
            <legend>Current employment status</legend>

            <input
              type="radio"
              id="unemployed"
              name="employment"
              onChange={handleChange}
              value="unemployed"
            />
            <label htmlFor="unemployed">Unemployed</label>
            <br />

            <input
              type="radio"
              id="part-time"
              name="employment"
              onChange={handleChange}
              value="part-time"
            />
            <label htmlFor="part-time">Part-time</label>
            <br />

            <input
              type="radio"
              id="full-time"
              name="employment"
              onChange={handleChange}
              value="full-time"
            />
            <label htmlFor="full-time">Full-time</label>
            <br />
          </fieldset>

          <label htmlFor="favColor">What is your favorite color?</label>
          <br />
          <select
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"
          >
            <option value="">-- Choose --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>
          <button>Submit</button>
        </form>

        {/* {boxElements} */}
      </h2>
    </div>
  );
}
