import './App.css';
import { Route, Switch, } from "react-router-dom";
import { useState, useEffect } from "react";

import { getAllQuotes } from "./services/api";
import Navbar from "./components/Navbar";
import Mind from "./components/Mind"
import Heart from "./components/Heart"
import Soul from "./components/Soul"
import Create from "./components/Create"
import Footer from "./components/Footer"

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllQuotes();
      setQuotes(res);
    };
    fetchData();
  }, []);


  return (
    <div className="App Container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="Body">
            <h1 className="title">Your Kindness</h1>
            <h2>Welcome</h2>
            <h4>Your mind keeps you Focus, your heart keeps you Strong and your Soul keeps you Connected.</h4>
            <p>I made this project with the intent of helping people uplift one another and to freely express themselves in a authentic, passionate way. I personally struggle to stay focus and I tend to watch motivational videos to help keep me focus.</p>
          </div>
          
        {quotes.map((quote) => {
        return <div className="Quote Box" key={quote.id}>
          <p>Name: {quote.fields.name}</p>
          <p>Quote: {quote.fields.quote}</p>
          <p>Date: {quote.fields.dateMade}</p>
        </div>;
      })}
      
        </Route>

        <Route exact path="/Mind/">
          <Mind />
        </Route>

        <Route exact path="/Heart/">
          <Heart />
        </Route>

        <Route exact path="/Soul/">
          <Soul />
        </Route>
        
        <Route  exact path="/Create/">
          <Create />
        </Route>
      </Switch>



      <Footer />
    </div>
  );
}

export default App;
