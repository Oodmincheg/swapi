import React from "react";
import EntityLink from "./EntityLink.js";

const EntityCard = props => {
  let listParametrs = [];
  for (let key in props) {
    if (Array.isArray(props[key])) {
      listParametrs.push(
        <div key={props[key]} className="entityList">
          {key}:
          {props[key].map((url, index) => (
          <EntityLink key={index} url={url}/>
          ))}
        </div>
      );
    } else if (key === "homeworld") {
      listParametrs.push(
        <div key={key}>
          <EntityLink url={props[key]} />
        </div>
      );
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
      <h1>{props.name || props.title}</h1>
      {listParametrs.map(el => el)}
    </div>
  );
};

export default EntityCard;
