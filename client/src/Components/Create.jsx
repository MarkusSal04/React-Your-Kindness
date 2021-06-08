import { useState } from "react"
import { createQuote } from "../services/api"

const newArt = {
  name: "",
  quote: "",
  dateMade: "",
}


export default function CreateQuote() {
  const [input, setInput] = useState(newArt)

  const handleChange = (e) => {
    const { name, value } = e.target
    
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createQuote()
    console.log(res)
  }


  return (
    <div className="Create">
      <forms>
        <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        
        <label> Quote:</label>
        <input type="text" name="quote" onChange={handleChange} />
        
        <label>Date:</label>
        <input type="text" name="dateMade" onChange={handleChange} />
        
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </forms>
    </div>
    
  )
}