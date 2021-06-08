import './App.css';
import { Route, Switch, } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GetQuotes } from "./services/api";


import Mind from "./components/Mind"
import Heart from "./components/Heart"
import Soul from "./components/Soul"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
          <div>
            HomePage
          </div>
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
