import { useState } from "react";
import { createQuote } from "../services/api";

const newArt = {
  name: "",
  quote: "",
  dateMade: "",
  expression: "",
};

export default function CreateQuote() {
  const [input, setInput] = useState(newArt);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createQuote(input);
    console.log(res);
  };

  return (
    <div className="Create">
      <h2>Contribute to The Kindess</h2>
      <p>Just let your thoughts flow.</p>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" />
        <br />
        <label> Quote:</label>
        <input type="text" name="quote" />
        <br />
        <label>Date:</label>
        <input type="text" name="dateMade" />
        <br />
        <label>Expression:</label>
        <input type="list" name="expression" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}