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

  return (
    <div className="All">
      <div className="Body">
        <h2>Soul is the bridge to Connection</h2>
        <p>The start of all healing, begins with the spirit.</p>
        </div>

        <div className="Quotes">
        {quotesSoul.map((quote) => {
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