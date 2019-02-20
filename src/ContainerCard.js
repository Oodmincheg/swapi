import React, { Component } from "react";
import EntityCard from "./EntityCard.js";

class ContainerEntityCard extends Component {
  state = {entityObject: {}};
  fetchFromUrlAndSetState = async url => {
    let data = await fetch(url);
    let entityObject = await data.json();
    this.setState({entityObject});
  };
  componentDidMount() {
    const { url } = this.props.location.state;
    this.fetchFromUrlAndSetState(url);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.state.url !== this.props.location.state.url) {
      debugger;
      this.fetchFromUrlAndSetState(nextProps.location.state.url);
    }
  }
  render() {
    return <EntityCard {...this.state.entityObject} />;
  }
}

export default ContainerEntityCard;
