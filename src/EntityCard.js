import React from "react";
import { Link } from "react-router-dom";

const EntityCard = props => {
  let listParametrs = [];
  for (let key in props) {
    if (Array.isArray(props[key])) {
      listParametrs.push(<div key={props[key]}>{props[key].map(url => <Link key={url} to={{pathname:"/entity", state:{url: url}}}>{key}:{url}</Link>)}}</div>);
    } else {
      listParametrs.push(
        <div key={key}>
          {key} : {props[key]}
        </div>
      );
    }
  }
  return (
    <div>
      <h1>EntityCard</h1>
      {listParametrs.map(el => el)}
    </div>
  );
};

export default EntityCard;
