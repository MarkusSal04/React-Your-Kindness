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


  const handleSubmit = (e) => {
    e.preventDefault()
    const res = CreateQuote(input)
    
  }


  return (
    <forms>
      <div className="Create">
        <label>
          Name:
           <input type="text" name="name" />
        </label>
        <label>
          Quote:
           <input type="text" name="Quote" />
        </label>
        <label>
          Date:
           <input type="text" name="Date" />
        </label>
      </div>
    </forms>
  )
}