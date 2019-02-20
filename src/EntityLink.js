import React, { Component } from "react";
import { Link } from "react-router-dom";

class EntityLink extends Component {
  async componentDidMount() {
    const { url } = this.props.location.state;
    let data = await fetch(url);
    let entityObject = await data.json();
    this.setState(entityObject);
  }
  render() {
    return <Link to={{pathname:'/entity'}}></Link>;
  }
}

export default EntityLink;
