import { useState, useEffect } from "react";
import { getAllQuotes } from "../services/api";

export default function Mind() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllQuotes();
      setQuotes(res);
      console.log(res)
    };
    fetchData();
  }, []);



  return (
    <div>
      {quotes.map((quote) => {
        return <div key={quotes.id}>
          {quote.fields.name}
          <p>Name: {quote.fields.name}
          </p>
          <p>Quote: {quote.fields.quote}</p>
          <p>Date: {quote.fields.dateMade}</p>
        </div>;
      })}
    </div>
  );
}
