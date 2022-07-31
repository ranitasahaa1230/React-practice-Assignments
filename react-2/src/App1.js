import "./styles.css";
import React, { useState } from "react";

export default function App1() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: true
  });

  // console.log(formData);
  function handlerEvent(event) {
    const { value, name, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev, //implicit return
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.password === formData.confirmPassword)
      console.log("Sign Up Successful");
    else {
      console.log("Didn't match");
      return; //bcoz dont want after didnt match sign up newsletter should work
    }
    if (formData.newsletter) {
      console.log("Thanks for signing up for our newsletter!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handlerEvent}
        value={formData.email}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handlerEvent}
        value={formData.password}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handlerEvent}
        value={formData.confirmPassword}
      />
      <br />
      <input
        type="checkbox"
        id="newsletter"
        name="newsletter"
        onChange={handlerEvent}
        checked={formData.newsletter}
      />
      <label htmlFor="newsletter">I want to sign up newsletter</label>
      <br />
      <button>Sign Up</button>
    </form>
  );
}
