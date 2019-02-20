import React, { Component } from "react";
import { STARSHIPS_URL } from "./urls";
import ListContainer from "./components/ListContainer";

class Starships extends Component {
  render() {
    return (
      <div>
        <h1>Starships</h1>
        <ListContainer url={STARSHIPS_URL} title="name"/>
      </div>
    );
  }
}

export default Starships;
