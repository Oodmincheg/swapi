import React, { Component } from "react";
import Pagination from "./Pagination";
import List from "./List";

export default class ListContainer extends Component {
  state = { isSorted: false };
  compare = (a, b) => {
    const { title } = this.props;
    return a[title] > b[title] ? 1 : a[title] < b[title] ? -1 : 0;
  };
  handleSortChange = () => {
    this.setState(prevState => ({isSorted: !prevState.isSorted}))
  }
  componentDidMount() {
    this.fetchData(this.props.url, 1);
  }
  fetchData = async (url, currentPage) => {
    let data = await fetch(url);
    data = await data.json();
    this.setState({ ...data, currentPage });
  };
  render() {
    const { next, previous, currentPage, results, isSorted } = this.state;
    const { title } = this.props;
    let listToRender = isSorted && results ? results.slice().sort(this.compare) : results
    console.log('results', results)
    return (
      <div>
        <List
          list={listToRender}
          title={title}
          handleSortChange = {this.handleSortChange}
        />
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
  title: "name"
};
