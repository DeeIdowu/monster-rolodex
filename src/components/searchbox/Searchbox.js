import React from "react";

import "./search.css";

//functional component:
export const Searchbox = props => (
  <input
    className="search"
    type="search"
    placeholder="search monster"
    onChange={props.onSearchChange}
  />
);
