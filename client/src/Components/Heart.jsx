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
      <h2>Emotions is the stepping stone to Happiness </h2>
      {quotesHeart.map((quote) => {
        return <div className="Quote container-2" key={quote.id}>
          <p>Name: {quote.fields.name}</p>
          <p>Quote: {quote.fields.quote}</p>
          <p>Date: {quote.fields.dateMade}</p>
        </div>;
      })}
    </div>
  );
  
}