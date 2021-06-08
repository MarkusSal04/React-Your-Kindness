import './App.css';
import { Route, Switch, } from "react-router-dom";

import Navbar from "./components/Navbar";
import Mind from "./components/Mind"
import Heart from "./components/Heart"
import Soul from "./components/Soul"
import Create from "./components/Create"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="Header">
      <Navbar />

      <Switch>
        <Route exact path="/">
        <div className="Body">
          <h2>Welcome</h2>
          <p>I made this project with the intent of helping people uplift one another and to freely express themselves in a authentic, passionate way. I personally struggle to stay focus and I tend to watch motivational videos to help keep me focus.</p>
        </div>
        <div className="Footer">
        </div>
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
