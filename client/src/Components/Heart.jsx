import { useState, useEffect } from "react";
import { getAllQuotes } from "../services/api";


export default function Heart() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllQuotes();
      setQuotes(res);
    };
    fetchData();
  }, []);

  const quotesHeart = quotes.filter(quote => quote.fields.expression === "Heart")
  console.log(quotesHeart)

  return (
    <div>
      {quotesHeart.map((quote) => {
        return <div key={quotes.id}>
          <p>Name: {quote.fields.name}</p>
          <p>Quote: {quote.fields.quote}</p>
          <p>Date: {quote.fields.dateMade}</p>
        </div>;
      })}
    </div>
  );
  
}