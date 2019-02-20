import React, { Component } from "react";
import {Link} from 'react-router-dom'

class List extends Component {
  handleSortChange = () => {
    this.props.handleSortChange()
  }

  handleSearchChange = ({target}) => {
    this.props.handleSearchChange(target)
  }
  render() {
    const { list, title } = this.props;
    if (!list) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <input type='checkbox' id='sort' onChange={this.handleSortChange}></input>
          <label htmlFor='sort'>Sort</label>
          <input type='text' id='search' onChange={this.handleSearchChange}></input>
          <label htmlFor='search'>Search</label>
          <ul>
            {list.map(element => (
              <li key={element.url}>
                <Link to={{pathname: "/entity", state: {url: element.url}}}>{element[title]}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default List;
