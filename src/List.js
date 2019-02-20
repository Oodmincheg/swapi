import React, { Component } from "react";
import {Link} from 'react-router-dom'

class List extends Component {
  render() {
    const { list, title } = this.props;
    console.log(list);
    if (!list) {
      console.log("here");
      return <h1>Loading...</h1>;
    } else {
      return (
        <ul>
          {list.map(element => (
            <li key={element.url}>
              <Link to={{pathname: "/entity", state: {url: element.url}}}>{element[title]}</Link>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default List;
