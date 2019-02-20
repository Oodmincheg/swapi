import React, { Component } from "react";
import Films from "./Films";
import People from "./People";
import Species from './Species'
import Vehicles from './Vehicles'
import Planets from './Planets'
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
            <Route exact path="/planets" component={Planets} />
            <Route exact path="/people" component={People} />
            <Route exact path="/starships" component={Starships} />
            <Route exact path="/species" component={Species} />
            <Route exact path="/vehicles" component={Vehicles} />
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
