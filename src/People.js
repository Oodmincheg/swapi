import React, { Component } from "react";
import { PEOPLE_URL } from "./urls";
import ListContainer from "./ListContainer";

class People extends Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <ListContainer url={PEOPLE_URL} />
      </div>
    );
  }
}

export default People;
