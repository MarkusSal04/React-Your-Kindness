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
      <div className="All">
        <div className="Body">
          <h2>Mental focus is the key to Success</h2>
          <p>We may be struggling however, we can endure the process as long as we believe and trust in it.</p>
        </div>
        <div className="Quotes">
          {quotesMind.map((quote) => {
          return  <div className="Quote" key={quote.id}>
              <p>{quote.fields.name}</p>
              <p>{quote.fields.quote}</p>
              <p>{quote.fields.dateMade}</p>
            </div>;
          })}
        </div>
      </div>
    
    );
}
