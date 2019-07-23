import React from "react";
import "./cardlist.css";

//creating of stateless component via use of props
export const CardList = props => {
  console.log(props);
  return <div className="card-list">{props.children}</div>;
};
