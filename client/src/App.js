import './App.css';
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GetQuotes } from "./services/api";


import Mind from "./components/Mind"
import Heart from "./components/Heart"
import Soul from "./components/Soul"




function App() {


  useEffect(() => {
    const fetchData = async () => {
      const res = await GetQuotes
    }
    fetchData()
  }, [])






  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
          <div>Your Kindness</div>
        </Route>

        <Route exact path="/Mind/">
          <Mind />
        </Route>

        <Route path="/Heart/">
          <Heart />
        </Route>

        <Route path="/Soul/">
          <Soul />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
