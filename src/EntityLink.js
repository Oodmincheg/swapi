import React, { Component } from "react";
import { Link } from "react-router-dom";

class EntityLink extends Component {
  state = { entityObject: {} };
  async componentDidMount() {
    const { url } = this.props;
    let data = await fetch(url);
    let entityObject = await data.json();
    this.setState({ entityObject });
  }
  render() {
    const { url } = this.props;
    const { name, title } = this.state.entityObject;
    return (
      <Link to={{ pathname: "/entity", state: { url: url } }}>{name || title}</Link>
    );
  }
}

export default EntityLink;
