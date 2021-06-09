import { useState, useEffect } from "react";
import { getAllQuotes } from "../services/api";


export default function Soul() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllQuotes();
      setQuotes(res);
    };
    fetchData();
  }, []);

  const quotesSoul = quotes.filter(quote => quote.fields.expression === "Soul")
  console.log(quotesSoul)

  return (
    <div>
      {quotesSoul.map((quote) => {
        return <div key={quote.id}>
          <p>Name: {quote.fields.name}</p>
          <p>Quote: {quote.fields.quote}</p>
          <p>Date: {quote.fields.dateMade}</p>
        </div>;
      })}
    </div>
  );
}