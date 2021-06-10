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
        <h2>Mental focus is the key to Success</h2>
        <p>Here lets motivate each other to complete our goals in life. We may be struggling however, we can endure the process as long as we believe and trust in it.</p>
        {quotesMind.map((quote) => {
        return  <div className="Quote container-1" key={quote.id}>
            <p>Name: {quote.fields.name}</p>
            <p>Quote: {quote.fields.quote}</p>
            <p>Date: {quote.fields.dateMade}</p>
          </div>;
        })}
      </div>
    );
}
