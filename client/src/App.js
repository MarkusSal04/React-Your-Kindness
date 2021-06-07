import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Mind from "./Components/Mind"
import Heart from "./Components/Heart"
import Soul from "./Components/Soul"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/">
          <div>Your Kindness</div>
        </Route>

        <Route exact path="./Mind">
          <Mind />
        </Route>

        <Route path="./Heart">
          <Heart />
        </Route>

        <Route path="./Soul">
          <Soul />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
