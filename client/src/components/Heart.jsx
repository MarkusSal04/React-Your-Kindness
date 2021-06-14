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

  return (
    <div className="All">
      <div className="Body">
        <h2>Emotions is the CornerStone of being Human </h2>
        <p>At every corner in life, we will constantly inherent a wave of emotions, what you do with it is up speaks about you as a person.</p>
      </div>
      <div className="Quotes">
        {quotesHeart.map((quote) => {
          return <div className="Quote" key={quote.id}>
            <p>{quote.fields.name}</p>
            <p>{quote.fields.quote}</p>
            <p>{quote.fields.dateMade}</p>
          </div>;
        })}
      </div>
    </div>
  );
  
}