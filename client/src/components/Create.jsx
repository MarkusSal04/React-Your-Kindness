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

  const handleReset = (e) => {
  }



  return (
    <div className="Create" >
      <h2>Contribute to The Kindess</h2>
      <p>Just let your thoughts flow.</p>
      <form onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          required
        />
        <br />
        <label> Quote:</label>
        <input
          type="text"
          name="quote"
          required
        />
        <br />
        <label>Date:</label>
        <input
          type="text"
          name="dateMade"
          required
        />
        <br />
        <label>Expression:</label>
        <input
          list="categories"
          name="expression"
          required
        />
        <datalist id="categories">
          <option value="Mind" />
          <option value="Heart" />
          <option value="Soul" />
        </datalist>
        <br />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}