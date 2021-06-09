import { useState, useEffect } from "react";
import { getAllQuotes } from "../services/api";

export default function Mind() {
  const [quotes, setQuotes] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllQuotes();
      setQuotes(res);
    };
    fetchData();
  }, []);
    
  const quotesMind = quotes.filter(quote => quote.fields.expression === "Mind")
  console.log(quotesMind)

    return (
      <div>
        {quotesMind.map((quote) => {
        return  <div key={quotes.fields}>
            <h2>Expression</h2>
            <p>Name: {quote.fields.name}</p>
            <p>Quote: {quote.fields.quote}</p>
            <p>Date: {quote.fields.dateMade}</p>
          </div>;
        })}
      </div>
    );
}
