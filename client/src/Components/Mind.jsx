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
        <h2>Expression</h2>
        <h4>Here lets motivate each other to complete our goals in life. We may be struggling however, we can endure the process as long as we believe and trust in it.</h4>
        {quotesMind.map((quote) => {
        return  <div key={quote.id}>
            <p>Name: {quote.fields.name}</p>
            <p>Quote: {quote.fields.quote}</p>
            <p>Date: {quote.fields.dateMade}</p>
          </div>;
        })}
      </div>
    );
}
