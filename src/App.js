import React from "react";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Contact} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Resume" component={Resume} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
