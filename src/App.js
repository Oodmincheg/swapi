import React, { Component } from "react";
import Films from "./Films";
import People from "./People";
import "./App.css";
import Starships from "./Starships";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ContainerEntityCard from "./ContainerCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/films" component={Films} />
            <Route exact path="/people" component={People} />
            <Route exact path="/starships" component={Starships} />
            <Route
              exact
              path="/entity"
              render={props => <ContainerEntityCard {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
