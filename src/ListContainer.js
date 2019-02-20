import React, { Component } from "react";
import Pagination from "./Pagination";
import List from "./List";

export default class ListContainer extends Component {
  state = {};
  componentDidMount() {
    this.fetchData(this.props.url, 1);
  }
  fetchData = async (url, currentPage) => {
    let data = await fetch(url);
    data = await data.json();
    this.setState({ ...data, currentPage });
  };
  render() {
    const { next, previous, currentPage, results } = this.state;
    return (
      <div>
        <List list={results} title={this.props.title}/>
        <Pagination
          nextPage={next}
          currentPage={currentPage}
          prevPage={previous}
          onClick={this.fetchData}
        />
      </div>
    );
  }
}

ListContainer.defaultProps = {
  title: 'name'
}